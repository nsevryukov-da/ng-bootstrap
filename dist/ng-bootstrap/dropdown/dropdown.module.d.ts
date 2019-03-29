import { ModuleWithProviders } from '@angular/core';
export { NgbDropdown, NgbDropdownAnchor, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem } from './dropdown';
export { NgbDropdownConfig } from './dropdown-config';
export declare class NgbDropdownModule {
    /**
     * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
     * Will be removed in 4.0.0.
     *
     * @deprecated 3.0.0
     */
    static forRoot(): ModuleWithProviders;
}
