import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album';
import { Album } from '../../models/album';

@Component({
  selector: 'app-albums',
  imports: [RouterLink],
  templateUrl: './albums.html',
  styleUrl: './albums.css'
})
export class Albums implements OnInit {
  albums = signal<Album[]>([]);
  loading = signal(true);

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe({
      next: (albums) => {
        this.albums.set(albums);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }

  deleteAlbum(id: number, event: Event): void {
    event.stopPropagation();
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums.update(albums => albums.filter(a => a.id !== id));
    });
  }
}
