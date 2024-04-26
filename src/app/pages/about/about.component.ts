import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  sentences = [
    'RED SPIDER specializes in providing web & design solutions and is dedicated to providing quality digital marketing services.We have our team of certified and experienced professionals.Our company also consists of an professional team that is always ready to accommodate your needs and provide the correct solutions to problems that prevent your business from moving forward.',
    'This is sentence 2',
    'This is sentence 3',
    'This is sentence 4',
    'This is sentence 5',
    'This is sentence 6'
  ];

  selectedSentence = this.sentences[0];
  selectedIndex = 1;

  showSentence(index: number) {
    this.selectedSentence = this.sentences[index - 1];
    this.selectedIndex = index;
  }
}
