class Optional<T> {
  #value: T | null = null;

  hasValue(): boolean {
    return this.#value !== null;
  }

  setValue(value: T) {
    this.#value = value;
  }

  getValue(): T {
    if (this.#value === null) {
      throw "No value";
    }
    return this.#value;
  }
}

let stringMaybe = new Optional<string>();

stringMaybe.setValue("Hi");
