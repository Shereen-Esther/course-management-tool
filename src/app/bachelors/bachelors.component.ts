import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bachelors',
  imports: [
    CommonModule,
    MatSelectModule, // Add this import
    MatCheckboxModule, // Add this import
    FormsModule,],
  templateUrl: './bachelors.component.html',
  styleUrl: './bachelors.component.scss'
})
export class BachelorsComponent {
  // Options for the dropdown
  // options = [
  //   { label: 'HUM-1012G:	Discipleship of the Christian Mind	(2 credits)', value: 'HUM-1012G:	Discipleship of the Christian Mind	(2 credits)' },
  //   { label: 'Option 2', value: '2' },
  //   { label: 'Option 3', value: '3' },
  // ];

  //   // Store selected options
  //   selectedOptions: string[] = [];

  //   // Handle checkbox change
  //   onCheckboxChange(event: any, value: string) {
  //     if (event.checked) {
  //       this.selectedOptions.push(value); // Add to selected options
  //     } else {
  //       const index = this.selectedOptions.indexOf(value);
  //       if (index >= 0) {
  //         this.selectedOptions.splice(index, 1); // Remove from selected options
  //       }
  //     }
  //   }

  // Options for all dropdowns
  dropdowns = [
    {
      label: 'Gateway 2-3 (Required: 1 course)',
      options: [
        { label: 'HUM-1012G: Discipleship of the Christian Mind (2 credits)', value: 'HUM-1012G', credits: 2 },
        { label: 'Option 2 (3 credits)', value: 'Option 2', credits: 3 },
        { label: 'Option 3 (1 credit)', value: 'Option 3', credits: 1 },
      ],
    },
    {
      label: 'Foundations 9-12 (Required: 1 course)',
      options: [
        { label: 'SCI-101: Science Basics (4 credits)', value: 'SCI-101', credits: 4 },
        { label: 'Option 5 (2 credits)', value: 'Option 5', credits: 2 },
        { label: 'Option 6 (3 credits)', value: 'Option 6', credits: 3 },
      ],
    },
    // Add other dropdowns here...
  ];
  
  // Store selected options for each dropdown
  selectedOptionsMap: { [key: string]: string[] } = {};
  
  // Initialize total credits for each dropdown
  totalCreditsMap: { [key: string]: number } = {};
  
  // Grand total credits
  grandTotalCredits = 0;
  
  constructor() {
    // Initialize selectedOptionsMap and totalCreditsMap for all dropdowns
    this.dropdowns.forEach((dropdown, index) => {
      const key = `dropdown${index + 1}`;
      this.selectedOptionsMap[key] = [];
      this.totalCreditsMap[key] = 0; // Initialize to 0
    });
  }
  
  // Handle checkbox change for a specific dropdown
  onCheckboxChange(event: any, dropdownKey: string, value: string) {
    const selectedOptions = this.selectedOptionsMap[dropdownKey];
    const dropdownIndex = parseInt(dropdownKey.replace('dropdown', '')) - 1;
    const dropdown = this.dropdowns[dropdownIndex];
    const option = dropdown.options.find((opt) => opt.value === value);
  
    if (!option) return;
  
    if (event.checked) {
      selectedOptions.push(value); // Add to selected options
      this.totalCreditsMap[dropdownKey] += option.credits; // Add credits
    } else {
      const index = selectedOptions.indexOf(value);
      if (index >= 0) {
        selectedOptions.splice(index, 1); // Remove from selected options
        // this.totalCreditsMap[dropdownKey] -= option.credits; // Subtract credits
      }
    }
  
    this.calculateGrandTotal(); // Recalculate grand total
  }
  
  // Calculate the grand total credits
  calculateGrandTotal() {
    this.grandTotalCredits = Object.values(this.totalCreditsMap).reduce(
      (sum, credits) => sum + credits,
      0
    );
  }
  
}
