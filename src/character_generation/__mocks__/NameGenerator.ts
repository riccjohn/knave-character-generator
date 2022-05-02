class NameGenerator {
  static firstName(gender?: IGender): string {
    switch (gender) {
      case "male":
        return "maleFirstName"
      case "female":
        return "femaleFirstName"
      default:
        return "genderfulFirstName"
    }
  }

  static surname(): string {
    return "Surname"
  }
}

export default NameGenerator
