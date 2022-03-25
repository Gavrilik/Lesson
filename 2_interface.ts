interface Rect {
  readonly id: string;
  color?: string;
  size: {
    width: number;
    height: number;
  };
}

const rect1: Rect = {
  id: "1",
  size: {
    width: 20,
    height: 30,
  },
  color: "#ccc",
};

const rect2: Rect = {
  id: "2",
  size: {
    width: 10,
    height: 12,
  },
};
rect2.color = "black";

const rect3 = {} as Rect; //считается этим типом
const rect4 = <Rect>{}; // старая запись

//========================

interface RectWithArea extends Rect {
  getArea: () => number; //тип данных который будет возвращен
}

const rect5: RectWithArea = {
  id: "3",
  size: {
    height: 20,
    width: 30,
  },
  getArea(): number {
    return this.size.width * this.size.height;
  },
};

// ======================

interface IClock {
  time: Date;
  setTime(date: Date): void;
}
class Clock implements IClock {
  time: Date = new Date();
  setTime(date: Date): void {}
}

//=========================

interface Styles {
  [key: string]: string;
}

const css: Styles = {
  border: "1px solid black",
  marginTop: "2px",
  borderRadius: "5px",
};
