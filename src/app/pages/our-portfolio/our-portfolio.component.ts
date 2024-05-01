import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { items } from 'src/app/data/data-portfolio';

@Component({
  selector: 'app-our-portfolio',
  templateUrl: './our-portfolio.component.html',
  styleUrls: ['./our-portfolio.component.css']
})
export class OurPortfolioComponent implements OnInit {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  openWebsite(url: string) {
    window.open(url, '_blank');
  }

  items = items;

  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({ left: -400, behavior: 'smooth' });
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({ left: 400, behavior: 'smooth' });
  }

  filteredItems = this.items; // Initialize filteredItems with all items

  selectedCategory: string = 'WEBSITES'; // Set the default selected category
  selectedOption: string = ''; // Variable to store the selected option
  showDropdown: boolean = false; // Variable to control the visibility of the dropdown

  categoryOptions: { [key: string]: string[] } = {
    'WEBSITES': ['Hospital', 'Sport', 'Industry'],
    'BACKEND': ['Hospital', 'School'],
    'DESIGN': ['Design 1', 'Design 2'],
    'E-COMMERCE': ['E-commerce 1', 'E-commerce 2']
  };

  ngOnInit() {
    // Filter items based on the default selected category on component initialization
    this.filteredItems = this.items.filter(item => item.category === this.selectedCategory);

    // Shuffle the order of the filtered items randomly
    this.shuffleItems();
  }

  shuffleItems() {
    // Fisher-Yates shuffle algorithm
    for (let i = this.filteredItems.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.filteredItems[i], this.filteredItems[j]] = [this.filteredItems[j], this.filteredItems[i]];
    }
  }

  selectCategory(category: string) {
    this.selectedCategory = category; // Set the selected category
    this.selectedOption = ''; // Reset the selected option
    this.showDropdown = false; // Close the dropdown
    this.filteredItems = this.items.filter(item => item.category === category); // Filter items based on the selected category
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown; // Toggle the dropdown visibility
  }

  selectOption(option: string) {
    this.selectedOption = option; // Set the selected option
    this.showDropdown = false; // Close the dropdown after selection
    this.filteredItems = this.items.filter(item => item.category === this.selectedCategory && item.websiteType.includes(option)); // Filter items based on the selected category and option
  }
}