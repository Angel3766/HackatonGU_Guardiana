actor {
  public query func greetByName(nombre : Text) : async Text {
    return "hola, " # nombre # "!";
  };

  public query func greetByLatitude(latitud : Text) : async Text {
    return "Tu latitud es: " # latitud # "!";
  };
};
