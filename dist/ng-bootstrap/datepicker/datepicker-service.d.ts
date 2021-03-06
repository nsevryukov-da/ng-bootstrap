import { NgbCalendar, NgbPeriod } from './ngb-calendar';
import { NgbDate } from './ngb-date';
import { NgbDateStruct } from './ngb-date-struct';
import { DatepickerViewModel, NgbDayTemplateData, NgbMarkDisabled } from './datepicker-view-model';
import { Observable } from 'rxjs';
import { NgbDatepickerI18n } from './datepicker-i18n';
export declare class NgbDatepickerService {
    private _calendar;
    private _i18n;
    private _model$;
    private _select$;
    private _state;
    readonly model$: Observable<DatepickerViewModel>;
    readonly select$: Observable<NgbDate>;
    dayTemplateData: NgbDayTemplateData;
    disabled: boolean;
    displayMonths: number;
    firstDayOfWeek: number;
    focusVisible: boolean;
    maxDate: NgbDate;
    markDisabled: NgbMarkDisabled;
    minDate: NgbDate;
    navigation: 'select' | 'arrows' | 'none';
    outsideDays: 'visible' | 'collapsed' | 'hidden';
    constructor(_calendar: NgbCalendar, _i18n: NgbDatepickerI18n);
    focus(date: NgbDate): void;
    focusMove(period?: NgbPeriod, number?: number): void;
    focusSelect(): void;
    open(date: NgbDate): void;
    reset(state: DatepickerViewModel): void;
    select(date: NgbDate, options?: {
        emitEvent?: boolean;
    }): void;
    toValidDate(date: NgbDateStruct, defaultValue?: NgbDate): NgbDate;
    private _nextState;
    private _patchContexts;
    private _updateState;
}
