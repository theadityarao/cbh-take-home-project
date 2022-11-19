const { deterministicPartitionKey } = require("./dpk");


// Test case 1
describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});

// Test case 2
describe("deterministicPartitionKey", () => {
  it("Returns a key for empty dict", () => {
    const trivialKey = deterministicPartitionKey({});
    expect(trivialKey).toBe("c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862");
  });
});

// Test case 3
describe("deterministicPartitionKey", () => {
  it("Returns a key for empty dict", () => {
    const trivialKey = deterministicPartitionKey({dummyValue: 1});
    expect(trivialKey).toBe("9fc6890885bfc80548b6964f72b6b2e5a1b7a22fc3992bfc924f368dd1660d1c596aff60479c27fb417ce38a1d372dd2abdd5b7a22db1fb20ea6d3cde9dc190a");
  });
});

// Test case 4
describe("deterministicPartitionKey", () => {
  it("Returns the existing partitionKey if present", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: "1"});
    expect(trivialKey).toBe("1");
  });
});

// Test case 5
describe("deterministicPartitionKey", () => {
  it("partitionKey > 256 chars", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: "c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862"});
    expect(trivialKey).toBe("dbdbea1dfd870ff4c4174b3331d7d332776fdbf2438dc7c910d2c889ca98a62eccb077cac648a3fa40e59362d2f393cf41a7ee3cf9d29a567b74c8353a3d0abc");
  });
});


// Test case 6
describe("deterministicPartitionKey", () => {
  it("non string partitionKey", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: 1});
    expect(trivialKey).toBe("1");
  });
});