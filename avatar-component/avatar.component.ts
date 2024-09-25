import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
  styles: `
  .avatar {
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
	}`
})

export class AvatarComponent {
  @Input() chars: number = 1; // John Doe: 1 = J, 2 = JD, 3 = J.D
  @Input() fullName: string = ''; // John Doe
  @Input() radius: number = 50; // Default: 50 for circle
  @Input() size: number = 36;
  color: string = '';
  fontSize: number = 0;
  initials: string = '';

  colors = [
    '#A4262C', '#5C2E91', '#8764B8', '#750B1C', '#0078D4',
    '#498205', '#038387', '#4F6BED', '#C239B3', '#005B70',
  ];

  ngOnInit(): void {
    this.initials = this.getInitials();
    this.color = this.getColor();
    this.fontSize = this.size/2.5;
  }

  getInitials(): string {
    const names = this.fullName.trim().split(' ');
    if (this.chars === 2) {
      return this.initials = names[0][0].toUpperCase() + (names[1] ? names[1][0].toUpperCase() : '');
    } else if (this.chars === 3) {
      return this.initials = names[0][0].toUpperCase() + '.' + (names[1] ? names[1][0].toUpperCase() : '');
    } else {
      return this.initials = names[0][0].toUpperCase();
    }
  }

  getColor(): string {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

}