class HashMap<Key, Value> {
  buckets: Array<Array<{ key: Key; value: Value }>> = [[], [], []];
  size = 0;

  hashCode(value: Key): number {
    const strValue = JSON.stringify(value);
    let hash = 0;
    for (let i = 0; i < strValue.length; i++) {
      hash = (hash << 5) - hash + strValue.charCodeAt(i);
    }
    return (hash & 0x7fffffff) % this.buckets.length;
  }

  set(key: Key, value: Value) {
    const index = this.hashCode(key);
    const bucket = this.buckets[index];

    const existsEntry = bucket.find((entry) => entry.key === key);

    if (existsEntry) existsEntry.value = value;
    else {
      bucket.push({ key, value });
      this.size++;
    }

    if (this.size > this.buckets.length) this.upscale();
  }

  get(key: Key): Value | undefined {
    const index = this.hashCode(key);
    const bucket = this.buckets[index];

    const existsEntry = bucket.find((entry) => entry.key === key);

    return existsEntry?.value;
  }

  delete(key: Key) {
    const index = this.hashCode(key);
    const bucket = this.buckets[index];

    const existsEntryIndex = bucket.findIndex((entry) => entry.key === key);

    if (existsEntryIndex !== -1) {
      bucket.splice(existsEntryIndex, 1);
      this.size--;
    }
  }

  upscale() {
    const oldBuckets = this.buckets;
    this.buckets = new Array(oldBuckets.length * 2).fill(null).map(() => []);
    this.size = 0;

    oldBuckets.forEach((bucket) => {
      bucket.forEach((entry) => {
        this.set(entry.key, entry.value);
      });
    });
  }
}

const haveSubscription = new HashMap<string, boolean>();

haveSubscription.set("Danil", true);
haveSubscription.set("Vlad", false);
haveSubscription.set("Alex", false);
haveSubscription.set("Alex1", false);

haveSubscription.delete("Danil");

console.log(haveSubscription.get("Danil"));

haveSubscription;
