import { Component, OnInit, Input } from '@angular/core';
import { TrackFeature } from '../../data/track-feature';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-thermometer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './thermometer.component.html',
  styleUrl: './thermometer.component.scss'
})  

export class ThermometerComponent implements OnInit {
  @Input() featureName: string | undefined;
  @Input() percentage: string | undefined;
  @Input() color: string | undefined;

  constructor() { }

  ngOnInit() {
  }

}