import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  categories = [
    {
      id: 1,
      name: 'Dermatology',
      photo: 'assets/icon/001-medicine.svg',
      count: 123,
      color: 'red'
    },
    {
      id: 2,
      name: 'Medical',
      photo: 'assets/icon/002-syringe.svg',
      count: 123,
      color: 'yellow'
    },
    {
      id: 3,
      name: 'Dermatology',
      photo: 'assets/icon/003-first-aid-kit.svg',
      count: 123,
      color: 'blue'
    },
    {
      id: 4,
      name: 'Dermatology',
      photo: 'assets/icon/004-tooth.svg',
      count: 123,
      color: 'green'
    },
    {
      id: 5,
      name: 'Dermatology',
      photo: 'assets/icon/005-siren.svg',
      count: 123,
      color: 'yellow'
    },
    {
      id: 6,
      name: 'Dermatology',
      photo: 'assets/icon/006-medical-history.svg',
      count: 123,
      color: 'magenta'
    },
    {
      id: 7,
      name: 'Dermatology',
      photo: 'assets/icon/007-plaster.svg',
      count: 123,
      color: 'red'
    },
    {
      id: 8,
      name: 'Dermatology',
      photo: 'assets/icon/008-test-tubes.svg',
      count: 123,
      color: 'blue'
    },
    {
      id: 9,
      name: 'Dermatology',
      photo: 'assets/icon/009-virus.svg',
      count: 123,
      color: 'navy'
    },
    {
      id: 10,
      name: 'Dermatology',
      photo: 'assets/icon/010-microscope.svg',
      count: 123,
      color: 'green'
    }
  ];

  doctors = [
    {
      id: 1,
      name: 'PhD Lara Jones',
      speciality: 'Dermatology',
      photo:
        // tslint:disable-next-line: max-line-length
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=124&q=80',
      reviews: 120,
      stars: 4.6,
      bio:
        // tslint:disable-next-line: max-line-length
        'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled',
      member_since: 'Feb, 2019',
      appointments: 102,
      services: [
        {
          id: 1,
          service: 'Dental Consultant',
          description:
            'Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
          price: 20
        },
        {
          id: 2,
          service: 'Hair Loss Treatment',
          description:
            'Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
          price: 25
        },
        {
          id: 3,
          service: 'Acne/Pimples Treatment',
          description:
            'Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
          price: 90
        },
        {
          id: 4,
          service: 'Wart removal',
          description:
            'Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
          price: 80
        }
      ]
    },
    {
      id: 2,
      name: 'PhD Jonathan McDonald',
      speciality: 'Medical genetics',
      photo:
        'https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=124&q=80',
      reviews: 12,
      stars: 3.1,
      bio:
        // tslint:disable-next-line: max-line-length
        'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled',
      member_since: 'Cct, 2019',
      appointments: 10,
      services: [
        {
          id: 1,
          service: 'Dental Consultant',
          description:
            'Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
          price: 20
        },
        {
          id: 2,
          service: 'Hair Loss Treatment',
          description:
            'Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
          price: 25
        },
        {
          id: 3,
          service: 'Acne/Pimples Treatment',
          description:
            'Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
          price: 90
        },
        {
          id: 4,
          service: 'Wart removal',
          description:
            'Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
          price: 80
        }
      ]
    },
    {
      id: 3,
      name: 'PhD Sandra Smith',
      speciality: 'Family medicine',
      photo:
        'https://images.unsplash.com/photo-1568967729548-e3dbad3d37e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=124&q=80',
      reviews: 120,
      stars: 4.6,
      bio:
        // tslint:disable-next-line: max-line-length
        'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled',
      member_since: 'Feb, 2019',
      appointments: 102,
      services: [
        {
          id: 1,
          service: 'Dental Consultant',
          description:
            'Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
          price: 20
        },
        {
          id: 2,
          service: 'Hair Loss Treatment',
          description:
            'Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
          price: 25
        },
        {
          id: 3,
          service: 'Acne/Pimples Treatment',
          description:
            'Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
          price: 90
        },
        {
          id: 4,
          service: 'Wart removal',
          description:
            'Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
          price: 80
        }
      ]
    },
    {
      id: 4,
      name: 'MsC John Carter',
      speciality: 'Internal medicine',
      photo:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=124&q=80',
      reviews: 582,
      stars: 4.8,
      bio:
        // tslint:disable-next-line: max-line-length
        'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled',
      member_since: 'Mar, 2005',
      appointments: 1200,
      services: [
        {
          id: 1,
          service: 'Dental Consultant',
          description:
            'Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
          price: 20
        },
        {
          id: 2,
          service: 'Hair Loss Treatment',
          description:
            'Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
          price: 25
        },
        {
          id: 3,
          service: 'Acne/Pimples Treatment',
          description:
            'Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
          price: 90
        },
        {
          id: 4,
          service: 'Wart removal',
          description:
            'Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
          price: 80
        }
      ]
    }
  ];

  appointments = [
    {
      id: 1,
      date: 'Oct 22, 2020 13:40 PM',
      status: 'Approved',
      booked: 'Oct 10, 2020 10:50 PM',
      location: 'General Hospital 20th Avenue',
      doctor: this.doctors[1],
      services: [
        {
          id: 1,
          service: 'Dental Consultant',
          description:
            'Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
          price: 20
        },
        {
          id: 2,
          service: 'Hair Loss Treatment',
          description:
            'Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
          price: 25
        },
      ],
      total: 45
    },
    {
      id: 2,
      date: 'Feb 12, 2020 13:00 PM',
      status: 'Pending',
      booked: 'Oct 10, 2020 02:50 PM',
      location: 'General Memorial St. Patrick',
      doctor: this.doctors[0],
      services: [
        {
          id: 1,
          service: 'Dental Consultant',
          description:
            'Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
          price: 20
        },
        {
          id: 2,
          service: 'Hair Loss Treatment',
          description:
            'Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
          price: 25
        },
      ],
      total: 45
    }
  ];

  reviews = [
    {
      avatar:
        'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      name: 'John Smith',
      rate: '5',
      text:
        'Amazing job. Well done, fast and clean. Is the best handyman and gentle dude to really help me solve my problem.'
    },
    {
      avatar:
        'https://images.unsplash.com/photo-1567186937675-a5131c8a89ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      name: 'Matthew McDonald',
      rate: '4',
      text:
        'Amazing job. Well done, fast and clean. Is the best handyman and gentle dude to really help me solve my problem.'
    },
    {
      avatar:
        // tslint:disable-next-line: max-line-length
        'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80',
      name: 'Sara Jenkins',
      rate: '4.5',
      text:
        'Amazing job. Well done, fast and clean. Is the best handyman and gentle dude to really help me solve my problem.'
    },
    {
      avatar:
        // tslint:disable-next-line: max-line-length
        'https://images.unsplash.com/photo-1551185887-26a932b61669?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80',
      name: 'Lara Dunkirk',
      rate: '5',
      text:
        'Amazing job. Well done, fast and clean. Is the best handyman and gentle dude to really help me solve my problem.'
    }
  ];

  constructor() {}

  getData() {
    return this.doctors;
  }

  getDataById(id: number) {
    return this.doctors.find((data: any) => data.id === id);
  }

  getCategories() {
    return this.categories;
  }

  getReviews() {
    return this.reviews;
  }

  getAppointments() {
    return this.appointments;
  }

  getAppointmentById(id: number) {
    return this.appointments.find((data: any) => data.id === id);
  }
}
