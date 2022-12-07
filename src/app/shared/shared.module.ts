import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MenubarModule} from 'primeng/menubar';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {CalendarModule} from 'primeng/calendar';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {CheckboxModule} from 'primeng/checkbox';
import {ChipsModule} from 'primeng/chips';
import {ColorPickerModule} from 'primeng/colorpicker';
import {DropdownModule} from 'primeng/dropdown';
import {EditorModule} from 'primeng/editor';
import {InputMaskModule} from 'primeng/inputmask';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputNumberModule} from 'primeng/inputnumber';
import {KnobModule} from 'primeng/knob';
import {KeyFilterModule} from 'primeng/keyfilter';
import {ListboxModule} from 'primeng/listbox';
import {MultiSelectModule} from 'primeng/multiselect';
import {PasswordModule} from 'primeng/password';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RatingModule} from 'primeng/rating';
import {SliderModule} from 'primeng/slider';
import {SelectButtonModule} from 'primeng/selectbutton';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {TreeSelectModule} from 'primeng/treeselect';
import {TriStateCheckboxModule} from 'primeng/tristatecheckbox';
import {ButtonModule} from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';
import {SpeedDialModule} from 'primeng/speeddial';
import {DataViewModule} from 'primeng/dataview';
import {GMapModule} from 'primeng/gmap';
import {OrderListModule} from 'primeng/orderlist';
import {OrganizationChartModule} from 'primeng/organizationchart';
import {PaginatorModule} from 'primeng/paginator';
import {PickListModule} from 'primeng/picklist';
import {TableModule} from 'primeng/table';
import {TimelineModule} from 'primeng/timeline';
import {TreeModule} from 'primeng/tree';
import {TreeTableModule} from 'primeng/treetable';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import {ScrollerModule} from 'primeng/scroller';
import {AccordionModule} from 'primeng/accordion';
import {CardModule} from 'primeng/card';
import {DividerModule} from 'primeng/divider';
import {FieldsetModule} from 'primeng/fieldset';
import {PanelModule} from 'primeng/panel';
import {SplitterModule} from 'primeng/splitter';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {TabViewModule} from 'primeng/tabview';
import {ToolbarModule} from 'primeng/toolbar';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {DialogModule} from 'primeng/dialog';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {SidebarModule} from 'primeng/sidebar';
import {TooltipModule} from 'primeng/tooltip';
import {FileUploadModule} from 'primeng/fileupload';
import {MenuModule} from 'primeng/menu';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DockModule} from 'primeng/dock';
import {MegaMenuModule} from 'primeng/megamenu';
import {PanelMenuModule} from 'primeng/panelmenu';
import {SlideMenuModule} from 'primeng/slidemenu';
import {StepsModule} from 'primeng/steps';
import {TabMenuModule} from 'primeng/tabmenu';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';
import {DragDropModule} from 'primeng/dragdrop';
import {BadgeModule} from 'primeng/badge';
import { ChipModule } from 'primeng/chip';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ScrollTopModule} from 'primeng/scrolltop';
import { TagModule } from 'primeng/tag';
import {AutoFocusModule} from 'primeng/autofocus';

@NgModule({
  declarations: [],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    CommonModule,
    MenubarModule,
    AutoCompleteModule,
    InputTextModule,
  ],
  exports: [
    MenubarModule,
    AutoCompleteModule,
    InputTextModule,
    ButtonModule
  ]
})
export class SharedModule { }
