class Player {
    constructor(name, score, role) {
      this.name = name;
      this.score = score;
      this.role = role;
    }
    move(e) {
        e.target.classList.add(this.role);
    }
  }