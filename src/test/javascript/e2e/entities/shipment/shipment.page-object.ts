import { browser, ExpectedConditions, element, by, ElementFinder } from 'protractor';

export class ShipmentComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-shipment div table .btn-danger'));
  title = element.all(by.css('jhi-shipment div h2#page-heading span')).first();

  async clickOnCreateButton(timeout?: number) {
    await this.createButton.click();
  }

  async clickOnLastDeleteButton(timeout?: number) {
    await this.deleteButtons.last().click();
  }

  async countDeleteButtons() {
    return this.deleteButtons.count();
  }

  async getTitle() {
    return this.title.getText();
  }
}

export class ShipmentUpdatePage {
  pageTitle = element(by.id('jhi-shipment-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));
  trackingCodeInput = element(by.id('field_trackingCode'));
  dateInput = element(by.id('field_date'));
  detailsInput = element(by.id('field_details'));
  invoiceSelect = element(by.id('field_invoice'));

  async getPageTitle() {
    return this.pageTitle.getText();
  }

  async setTrackingCodeInput(trackingCode) {
    await this.trackingCodeInput.sendKeys(trackingCode);
  }

  async getTrackingCodeInput() {
    return await this.trackingCodeInput.getAttribute('value');
  }

  async setDateInput(date) {
    await this.dateInput.sendKeys(date);
  }

  async getDateInput() {
    return await this.dateInput.getAttribute('value');
  }

  async setDetailsInput(details) {
    await this.detailsInput.sendKeys(details);
  }

  async getDetailsInput() {
    return await this.detailsInput.getAttribute('value');
  }

  async invoiceSelectLastOption(timeout?: number) {
    await this.invoiceSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async invoiceSelectOption(option) {
    await this.invoiceSelect.sendKeys(option);
  }

  getInvoiceSelect(): ElementFinder {
    return this.invoiceSelect;
  }

  async getInvoiceSelectedOption() {
    return await this.invoiceSelect.element(by.css('option:checked')).getText();
  }

  async save(timeout?: number) {
    await this.saveButton.click();
  }

  async cancel(timeout?: number) {
    await this.cancelButton.click();
  }

  getSaveButton(): ElementFinder {
    return this.saveButton;
  }
}

export class ShipmentDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-shipment-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-shipment'));

  async getDialogTitle() {
    return this.dialogTitle.getText();
  }

  async clickOnConfirmButton(timeout?: number) {
    await this.confirmButton.click();
  }
}
