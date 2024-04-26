import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  images = [
    '/assets/picture web site/pciture template website 2.jpg',
    '/assets/picture web site/picture template website 3.jpg',
    '/assets/picture web site/picture template website 4.jpg',
    // Add more image URLs as needed
  ];
  currentIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.startSlideshow();
  }

  ngOnDestroy() {
    this.stopSlideshow();
  }

  startSlideshow() {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 3000); // Change the duration as needed (in milliseconds)
  }

  stopSlideshow() {
    clearInterval(this.intervalId);
  }

  previousImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}
