type Size = "" | "small" | "medium" | "large";

class Product {
  constructor(
    public name: string = "",
    public size: Size = "",
    public price: number = 0
  ) {}

  isProductReady(): boolean {
    for (const key in this) {
      switch (typeof this[key]) {
        case "string":
          if ((<string>(<unknown>this[key])).length <= 0)
            throw Error(`The ${key} is empty`);
          break;
        case "number":
          if (<number>(<unknown>this[key]) <= 0)
            throw Error(`The ${key} is zero`);
          break;
        default:
          throw Error(`${typeof this[key]} is not valid`);
      }
    }

    return true;
  }

  toString() {
    // No DRY
    // if (this.name.length <= 0) throw Error("The name is empty");
    // if (this.size.length <= 0) throw Error("The size is empty");
    // if (this.price <= 0) throw Error("The price is zero");

    // DRY
    if (!this.isProductReady()) return;

    return `Product: ${this.name}, Size: ${this.size}, Price: ${this.price}`;
  }
}

(() => {
  const bluePants = new Product("blue pants", "medium", 20);
  console.log(bluePants.toString());
})();
