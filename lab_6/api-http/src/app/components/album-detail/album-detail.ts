import { Component, OnInit, signal } from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
import { AlbumService } from '../../services/album';
import { Album } from '../../models/album';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule,RouterLink, FormsModule],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css'
})
export class AlbumDetail implements OnInit {
  album = signal<Album | null>(null);
  editTitle = '';
  loading = signal(true);
  saved = signal(false);

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')??'0');
    this.albumService.getAlbum(id).subscribe({
      next: (album) => {
        this.album.set(album);
        this.editTitle = album.title;
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }

  saveTitle(): void {
    const current = this.album();
    if (!current) return;
    const updated: Album = { ...current, title: this.editTitle };
    this.albumService.updateAlbum(updated).subscribe(album => {
      this.album.set(album);
      this.saved.set(true);
      setTimeout(() => this.saved.set(false), 2000);
    });
  }
}
