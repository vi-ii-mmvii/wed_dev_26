#include <stdio.h>
#include <stdint.h>

uint8_t xtime(uint8_t x){
    return (x << 1) ^ ((x >> 7) * 0x1B);
}

uint8_t gmul(uint8_t a, uint8_t b){
    uint8_t res = 0;
    while (b)
    {
        if (b & 1) res ^= a;
        a = xtime(a);
        b >>= 1;
    }
    return res;
}

uint8_t gpow(uint8_t a, int e) {
    uint8_t res = 1;
    while (e)
    {
        if (e & 1) res = gmul(res, a);
        a = gmul(a, a);
        e >>= 1;
    }

    return res;
}

uint8_t invert(uint8_t x) {
    return gpow(x, 254);
}

uint8_t affine(uint8_t b) {
    uint8_t res = 0;
    for (int i = 0; i < 8; i++) {
        uint8_t bit = (b ^ (b >> 4) ^ (b >> 5) ^ (b >> 6) ^ (b >> 4)) & 1
    }
}

int main() {
    uint8_t byte = 0x53;
    unit8_t inv = invert(byte);

    uint8_t
}