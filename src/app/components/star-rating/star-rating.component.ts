import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-star-rating',
    templateUrl: './star-rating.component.html',
    styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent implements OnInit {

    constructor() {
        this.Math = Math;
        this.parseFloat = parseFloat;
    }

    @Input() public set rating(val: number) {
        this._rating = val;
        if (this.onChange) {
            this.onChange(val);
        }
    }

    public get rating(): number {
        return this._rating;
    }

    private _rating: number;
    private onChange: any;
    private onTouched: any;
    public disabled: boolean;

    @Output()
    ratingChanged: EventEmitter<number> = new EventEmitter<number>();

    @Input()
    readonly = 'false';
    @Input()
    activeColor = '#488aff';
    @Input()
    defaultColor = '#aaaaaa';
    @Input()
    activeIcon = 'ios-star';
    @Input()
    defaultIcon = 'ios-star-outline';
    @Input()
    halfIcon = 'ios-star-half';
    @Input()
    halfStar = 'false';
    @Input()
    maxRating = 5;
    @Input()
    fontSize = '28px';
    Math: any;
    parseFloat: any;
    iconsArray: number[] = [];

    public readonly eventInfo = (() => {
        const id = new Date().getTime();
        const topic = `star-rating:${id}:changed`;
        return {
            topic
        };
    })();

    ngOnInit(): void {
        this.rating = this.rating || 3; // default after input`s initialization
        for (let i = 0; i < this.maxRating; i++) {
            this.iconsArray.push(i);
        }
    }

    writeValue(obj: number): void {
        this.rating = obj;
    }
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }
    setDisabledState?(isDisabled: boolean): void {
        this.readonly = isDisabled ? 'true' : 'false';
    }

    changeRating(event) {

        if (this.readonly && this.readonly === 'true') { return; }
        // event is different for firefox and chrome
        const id = event.target.id ? parseInt(event.target.id) : parseInt(event.target.parentElement.id);
        if (this.halfStar && this.halfStar === 'true') {
            this.rating = ((this.rating - id > 0) && (this.rating - id <= 0.5)) ? id + 1 : id + .5;
        } else {
            this.rating = id + 1;
        }

        this.ratingChanged.emit(this.rating);
    }
}
