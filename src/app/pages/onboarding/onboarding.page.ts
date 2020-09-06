import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss']
})
export class OnboardingPage implements OnInit {
  products = [
    {
      id: 1,
      image: 'assets/icon/first-aid-kit-color.svg',
      title: 'Stay connected!',
      description: 'Connect your therapist, caretaker and doctor to one platform'
    },
    {
      id: 2,
      image: 'assets/icon/medical-history-color.svg',
      title: 'Find top deals and services',
      description: 'Find top deals and services and join the community'
    },
    {
      id: 3,
      image: 'assets/icon/ambulance-color.svg',
      title: 'Instant healthcare',
      description:
        '24/7 availability and quick response in emergency cases'
    }
  ];

  @ViewChild(IonSlides, { static: true }) slides: IonSlides;

  slideConfig = {
    spaceBetween: 2,
    slidesPerView: 1,
    centeredSlides: true
  };

  slidesTotal = 0;
  btnText = 'Next';

  constructor(private router: Router) {}

  ngOnInit() {
    this.slides.length().then(value => this.slidesTotal = value);
  }

  changeText(event) {
    this.btnText = `Let's go`;
  }

  nextSlide(event) {
    this.slides.getActiveIndex().then(idx => {
      if (this.slidesTotal === idx + 1) {
        this.router.navigateByUrl('/login');
      } else {
        this.slides.slideNext();
      }
    });
  }

  skipToHome() {
    this.router.navigateByUrl('/login');
  }

}
