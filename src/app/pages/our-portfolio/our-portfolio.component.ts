import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-portfolio',
  templateUrl: './our-portfolio.component.html',
  styleUrls: ['./our-portfolio.component.css']
})
export class OurPortfolioComponent implements OnInit {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  

  items = [
    { firstName: 'Hotel 1', websiteType: 'Hotel Website', imageUrl: '/assets/picture web site/pciture template website 2.jpg', category: 'WEBSITES' },
    { firstName: 'Hotel 2', websiteType: 'Hotel Website', imageUrl: '/assets/picture web site/picture template website 3.jpg', category: 'WEBSITES' },
    { firstName: 'Restaurant 1', websiteType: 'Restaurant Website', imageUrl: '/assets/picture web site/picture template website 4.jpg', category: 'WEBSITES' },
    { firstName: 'Restaurant 2', websiteType: 'Restaurant Website', imageUrl: '/assets/picture web site/picture template website 5.jpg', category: 'WEBSITES' },
    { firstName: 'Fitness', websiteType: 'Fitness Website', imageUrl: '/assets/picture web site/picture template website 6.jpg', category: 'WEBSITES' },
    { firstName: 'Hospital Backend', websiteType: 'Hospital Backend', imageUrl: '/assets/picture web site/picture template website 6.jpg', category: 'BACKEND' },
    { firstName: 'School Backend', websiteType: 'School Backend', imageUrl: '/assets/picture web site/picture template website 6.jpg', category: 'BACKEND' },
    { firstName: 'Design 1', websiteType: 'Design', imageUrl: '/assets/picture web site/picture template website 6.jpg', category: 'DESIGN' },
    { firstName: 'Design 2', websiteType: 'Design', imageUrl: '/assets/picture web site/picture template website 6.jpg', category: 'DESIGN' },
    { firstName: 'E-commerce 1', websiteType: 'E-commerce Website', imageUrl: '/assets/picture web site/picture template website 6.jpg', category: 'E-COMMERCE' },
    { firstName: 'E-commerce 2', websiteType: 'E-commerce Website', imageUrl: '/assets/picture web site/picture template website 6.jpg', category: 'E-COMMERCE' }
    // Add more objects for each item
  ];

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
    'WEBSITES': ['Hotel', 'Restaurant', 'Fitness'],
    'BACKEND': ['Hospital', 'School'],
    'DESIGN': ['Design 1', 'Design 2'],
    'E-COMMERCE': ['E-commerce 1', 'E-commerce 2']
  };

  ngOnInit() {
    // Filter items based on the default selected category on component initialization
    this.filteredItems = this.items.filter(item => item.category === this.selectedCategory);
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