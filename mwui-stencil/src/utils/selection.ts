export class Selection<T> {
  private _selection = new Set<T>();

  constructor(protected readonly multiple = false, values: T[] = []) {
    if (values && values.length) {
      if (multiple) {
        values.forEach(value => this._selection.add(value));
      } else {
        this._selection.add(values[0]);
      }
    }
  }

  get selected(): T[] {
    return Array.from(this._selection.values());
  }

  select(...values: T[]): void {
    if (this.multiple) {
      values.forEach(value => this._selection.add(value));
    } else {
      this._selection.clear();
      this._selection.add(values[0]);
    }
  }

  deselect(...values: T[]): void {
    values.forEach(value => this._selection.delete(value));
  }

  setSelection(...values: T[]): boolean | void {
    this._selection = new Set(values);
  }

  clear(): void {
    this._selection.clear();
  }

  toggle(value: T): void {
    this.isSelected(value) ? this.deselect(value) : this.select(value);
  }

  isSelected(value: T): boolean {
    return this._selection.has(value);
  }

  hasValues(): boolean {
    return !!Array.from(this._selection.values()).length;
  }
}
