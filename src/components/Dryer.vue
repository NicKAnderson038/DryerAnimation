<template>
  <div class="main">
    <div class="l">
      <div class="l__face l__face--front">
        <div class="l__control"></div>
        <div class="l__control"></div>
        <div class="l__buttons">
          <div class="l__button"></div>
          <div class="l__button"></div>
          <div class="l__button"></div>
        </div>
        <div class="l__c1">
          <div class="l__c2">
            <div class="l__clothes">
              <div class="l__clothes-i"></div>
              <div class="l__clothes-i"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="l__face l__face--back"></div>
      <div class="l__face l__face--right"></div>
      <div class="l__face l__face--left"></div>
      <div class="l__face l__face--top"></div>
      <div class="l__face l__face--bottom"></div>
    </div>
    <div class="s">
      <div class="l__face s__shadow"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Variables */

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 400px;
  height: 400px;
}

.l,
.s {
  position: relative;
  left: calc(50% - 300px);
  top: calc(50% - 300px);
  z-index: 300;
  transform-style: preserve-3d;
  transform: perspective(2000px) rotate3d(-500, -1000, 100, 30deg);
  animation: l 0.05s ease-in-out infinite alternate;
}
.l__face,
.s__face {
  position: absolute;
  height: 200px;
  width: 200px;
  z-index: 10;
}
.l__face--front,
.s__face--front {
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotateY(0deg) translateZ(100px);
  background-image: linear-gradient(to bottom, #a0ffd7 20%, #feffff 20%);
  border-top: 5px solid #d3fffd;
  border-bottom: 5px solid #c8cfd4;
}
.l__face--back,
.s__face--back {
  transform: rotateY(180deg) translateZ(100px);
  background-color: #c8cfd4;
}
.l__face--right,
.s__face--right {
  transform: rotateY(90deg) translateZ(100px);
  background-image: linear-gradient(to bottom, #5ecd9d 20%, #c8cfd4 20%);
  border-top: 5px solid #85d9b5;
}
.l__face--left,
.s__face--left {
  transform: rotateY(-90deg) translateZ(100px);
  background-color: #feffff;
}
.l__face--top,
.s__face--top {
  transform: rotateX(90deg) translateZ(100px);
  background-color: #d3fffd;
}
.l__face--bottom,
.s__face--bottom {
  transform: rotateX(-90deg) translateZ(100px);
  background-color: #c8cfd4;
}
.l__c1,
.s__c1 {
  display: flex;
  align-items: center;
  width: 120px;
  height: 120px;
  position: relative;
  border-radius: 50%;
  margin-top: 30px;
  border: 4px solid #d3fffd;
  box-shadow: 0 0 0 1px rgba(200, 207, 212, 0.75),
    1px 1px 1px 1px rgba(200, 207, 212, 0.5);
  background-image: linear-gradient(200deg, #5ecd9d 50%, #54ffb7 65%);
}
.l__c2,
.s__c2 {
  position: absolute;
  right: 0px;
  width: 100px;
  height: 110px;
  border-radius: 50%;
  background-color: #e6f4f9;
  overflow: hidden;
}
.l__c2::before,
.s__c2::before {
  content: "";
  position: absolute;
  bottom: 20px;
  left: calc(50% - 100px);
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-image: linear-gradient(
    to bottom,
    #364246,
    rgba(138, 157, 165, 0.4)
  );
}
.l__c2::after,
.s__c2::after {
  content: "";
  position: absolute;
  top: 30px;
  left: calc(50% - 40px);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-image: linear-gradient(
    to bottom,
    rgba(165, 187, 197, 0.7) 50%,
    rgba(165, 187, 197, 0.1) 60%
  );
}
.l__control,
.s__control {
  position: absolute;
  top: 6px;
  left: 20px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #feffff;
  box-shadow: inset -1px 0 0 #c8cfd4, 3px 2px 0 #5ecd9d;
}
.l__control:nth-of-type(2),
.s__control:nth-of-type(2) {
  left: 55px;
}
.l__button,
.s__button {
  position: absolute;
  top: 16px;
  left: 100px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  box-shadow: inset -1px 0 0 #c8cfd4, 1px 1px 0 #c8cfd4;
  background-color: #f36955;
}
.l__button:nth-of-type(2),
.s__button:nth-of-type(2) {
  left: 110px;
}
.l__button:nth-of-type(3),
.s__button:nth-of-type(3) {
  left: 120px;
}
.l__clothes,
.s__clothes {
  position: absolute;
  top: 50px;
  left: 60px;
  width: 10px;
  height: 10px;
  z-index: 100;
  animation: clothes 0.3s linear infinite;
}
.l__clothes-i,
.s__clothes-i {
  position: absolute;
  left: 40px;
  width: 50px;
  height: 50px;
  background-color: #ffb791;
  border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
}
.l__clothes-i:nth-of-type(2),
.s__clothes-i:nth-of-type(2) {
  left: 20px;
  bottom: 0;
  border-radius: 24% 76% 45% 55%/62% 30% 70% 38%;
  background-color: #d3fffd;
}

.s {
  animation: none;
  z-index: -100;
}
.s__shadow {
  transform: rotateX(-90deg) translateZ(50px) translateY(45px) translateX(25px)
    skewX(10deg);
  width: 225px;
  height: 300px;
  border-radius: 5px;
  background-color: #f36955;
  animation: shadow 0.05s ease-in-out infinite alternate;
}

/**/
@keyframes clothes {
  0% {
    transform-origin: left;
    transform: rotateZ(0);
  }
  100% {
    transform-origin: left;
    transform: rotateZ(1turn);
  }
}
@keyframes l {
  0% {
    transform-origin: top center;
    transform: perspective(2000px) rotate3d(-500, -1000, 100, 30deg)
      translateY(0) translateX(0) rotateZ(-3deg);
  }
  100% {
    transform-origin: top center;
    transform: perspective(2000px) rotate3d(-500, -1000, 0, 30deg)
      translateY(-10px) translateX(5px) rotateZ(5deg);
  }
}
@keyframes shadow {
  0% {
    width: 225px;
    height: 300px;
    transform: rotateX(-90deg) translateZ(50px) translateY(55px)
      translateX(25px) skewX(10deg);
  }
  100% {
    width: 226px;
    height: 302px;
    transform: rotateX(-90deg) translateZ(50px) translateY(55px)
      translateX(30px) skewX(15deg);
  }
}
</style>
