export function getTypeOfBusiness(typeOfBusinessKey) {
  switch (typeOfBusinessKey) {
    case "hotel":
      return "Hotel";
    case "restaurant":
      return "Restaurant";
    case "coffee-shop":
      return "Coffee Shop";
    case "store":
      return "Store";
    case "museum":
      return "Museum";
    case "theatre":
      return "Theatre";
    case "brand":
      return "Brand";
    case "supermarket":
      return "Supermarket";
    case "transport":
      return "Transport";
    case "workplace":
      return "Workplace";
    case "other":
      return "Other";
    default:
      return typeOfBusinessKey;
  }
}
