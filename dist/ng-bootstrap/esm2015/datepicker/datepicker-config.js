/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Configuration service for the NgbDatepicker component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the datepickers used in the application.
 */
export class NgbDatepickerConfig {
    constructor() {
        this.displayMonths = 1;
        this.firstDayOfWeek = 1;
        this.navigation = 'select';
        this.outsideDays = 'visible';
        this.showWeekdays = true;
        this.showWeekNumbers = false;
    }
}
NgbDatepickerConfig.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ NgbDatepickerConfig.ngInjectableDef = i0.defineInjectable({ factory: function NgbDatepickerConfig_Factory() { return new NgbDatepickerConfig(); }, token: NgbDatepickerConfig, providedIn: "root" });
if (false) {
    /** @type {?} */
    NgbDatepickerConfig.prototype.dayTemplate;
    /** @type {?} */
    NgbDatepickerConfig.prototype.dayTemplateData;
    /** @type {?} */
    NgbDatepickerConfig.prototype.footerTemplate;
    /** @type {?} */
    NgbDatepickerConfig.prototype.displayMonths;
    /** @type {?} */
    NgbDatepickerConfig.prototype.firstDayOfWeek;
    /** @type {?} */
    NgbDatepickerConfig.prototype.markDisabled;
    /** @type {?} */
    NgbDatepickerConfig.prototype.minDate;
    /** @type {?} */
    NgbDatepickerConfig.prototype.maxDate;
    /** @type {?} */
    NgbDatepickerConfig.prototype.navigation;
    /** @type {?} */
    NgbDatepickerConfig.prototype.outsideDays;
    /** @type {?} */
    NgbDatepickerConfig.prototype.showWeekdays;
    /** @type {?} */
    NgbDatepickerConfig.prototype.showWeekNumbers;
    /** @type {?} */
    NgbDatepickerConfig.prototype.startDate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcC8iLCJzb3VyY2VzIjpbImRhdGVwaWNrZXIvZGF0ZXBpY2tlci1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQWMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7QUFVdEQsTUFBTSxPQUFPLG1CQUFtQjtJQURoQztRQUtFLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBSW5CLGVBQVUsR0FBaUMsUUFBUSxDQUFDO1FBQ3BELGdCQUFXLEdBQXVDLFNBQVMsQ0FBQztRQUM1RCxpQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixvQkFBZSxHQUFHLEtBQUssQ0FBQztLQUV6Qjs7O1lBZkEsVUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQzs7Ozs7SUFFOUIsMENBQTZDOztJQUM3Qyw4Q0FBc0Y7O0lBQ3RGLDZDQUFpQzs7SUFDakMsNENBQWtCOztJQUNsQiw2Q0FBbUI7O0lBQ25CLDJDQUF1Rjs7SUFDdkYsc0NBQXVCOztJQUN2QixzQ0FBdUI7O0lBQ3ZCLHlDQUFvRDs7SUFDcEQsMENBQTREOztJQUM1RCwyQ0FBb0I7O0lBQ3BCLDhDQUF3Qjs7SUFDeEIsd0NBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBUZW1wbGF0ZVJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RheVRlbXBsYXRlQ29udGV4dH0gZnJvbSAnLi9kYXRlcGlja2VyLWRheS10ZW1wbGF0ZS1jb250ZXh0JztcbmltcG9ydCB7TmdiRGF0ZVN0cnVjdH0gZnJvbSAnLi9uZ2ItZGF0ZS1zdHJ1Y3QnO1xuXG4vKipcbiAqIENvbmZpZ3VyYXRpb24gc2VydmljZSBmb3IgdGhlIE5nYkRhdGVwaWNrZXIgY29tcG9uZW50LlxuICogWW91IGNhbiBpbmplY3QgdGhpcyBzZXJ2aWNlLCB0eXBpY2FsbHkgaW4geW91ciByb290IGNvbXBvbmVudCwgYW5kIGN1c3RvbWl6ZSB0aGUgdmFsdWVzIG9mIGl0cyBwcm9wZXJ0aWVzIGluXG4gKiBvcmRlciB0byBwcm92aWRlIGRlZmF1bHQgdmFsdWVzIGZvciBhbGwgdGhlIGRhdGVwaWNrZXJzIHVzZWQgaW4gdGhlIGFwcGxpY2F0aW9uLlxuICovXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBOZ2JEYXRlcGlja2VyQ29uZmlnIHtcbiAgZGF5VGVtcGxhdGU6IFRlbXBsYXRlUmVmPERheVRlbXBsYXRlQ29udGV4dD47XG4gIGRheVRlbXBsYXRlRGF0YTogKGRhdGU6IE5nYkRhdGVTdHJ1Y3QsIGN1cnJlbnQ6IHt5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXJ9KSA9PiBhbnk7XG4gIGZvb3RlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBkaXNwbGF5TW9udGhzID0gMTtcbiAgZmlyc3REYXlPZldlZWsgPSAxO1xuICBtYXJrRGlzYWJsZWQ6IChkYXRlOiBOZ2JEYXRlU3RydWN0LCBjdXJyZW50OiB7eWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyfSkgPT4gYm9vbGVhbjtcbiAgbWluRGF0ZTogTmdiRGF0ZVN0cnVjdDtcbiAgbWF4RGF0ZTogTmdiRGF0ZVN0cnVjdDtcbiAgbmF2aWdhdGlvbjogJ3NlbGVjdCcgfCAnYXJyb3dzJyB8ICdub25lJyA9ICdzZWxlY3QnO1xuICBvdXRzaWRlRGF5czogJ3Zpc2libGUnIHwgJ2NvbGxhcHNlZCcgfCAnaGlkZGVuJyA9ICd2aXNpYmxlJztcbiAgc2hvd1dlZWtkYXlzID0gdHJ1ZTtcbiAgc2hvd1dlZWtOdW1iZXJzID0gZmFsc2U7XG4gIHN0YXJ0RGF0ZToge3llYXI6IG51bWJlciwgbW9udGg6IG51bWJlcn07XG59XG4iXX0=