class HashSet<T> {
  buckets: Array<Array<T>> = [[], [], []];
  size = 0;

  hashCode(value: T): number {
    const strValue = JSON.stringify(value);
    let hash = 0;
    for (let i = 0; i < strValue.length; i++) {
      hash = (hash << 5) - hash + strValue.charCodeAt(i);
    }
    return (hash & 0x7fffffff) % this.buckets.length;
  }

  add(value: T) {
    const index = this.hashCode(value);
    const bucket = this.buckets[index];

    if (bucket.includes(value)) {
      return;
    }

    bucket.push(value);
    this.size++;

    if (this.buckets.length < this.size) this.upscale();
  }

  remove(value: T) {
    const index = this.hashCode(value);
    const bucket = this.buckets[index];

    const valueIndex = bucket.indexOf(value);

    if (valueIndex !== -1) {
      bucket.splice(valueIndex, 1);
      this.size--;
    }
  }

  contains(value: T): boolean {
    const index = this.hashCode(value);
    const bucket = this.buckets[index];

    if (bucket.includes(value)) {
      return true;
    }

    return false;
  }

  upscale() {
    const oldBuckets = this.buckets;
    this.buckets = new Array(oldBuckets.length * 2).fill(null).map(() => []);
    this.size = 0;

    oldBuckets.forEach((bucket) => {
      bucket.forEach((value) => {
        this.add(value);
      });
    });
  }
}

const set = new HashSet<number>();

set.add(1);
set.add(2);
set.add(3);

console.log(set.contains(2));

set.add(4);
set.add(5);
set.add(6);
set.add(7);

console.log(set.contains(2));

set.remove(1);
set.remove(2);

set;
