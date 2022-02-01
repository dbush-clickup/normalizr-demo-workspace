import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ContactsEffects } from './contacts/contacts.effects';
import { contactsFeatureKey, contactsReducer } from './contacts/contacts.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('shared', {
      contacts: contactsReducer,
    }),
    EffectsModule.forFeature([ContactsEffects]),
    StoreModule.forFeature( contactsFeatureKey, contactsReducer)
  ],
})
export class SharedModule {}
