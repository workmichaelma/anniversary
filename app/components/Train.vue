<template>
  <div class="train">
    <div class="locomotive">
      <div class="cabin">
        <div class="mickey"></div>
      </div>
      <div class="motor"></div>
      <div class="chimney">
        <div class="smoke"></div>
      </div>
      <div class="light"></div>
    </div>
    <div class="tail"></div>
  </div>
</template>

<style lang="stylus">
.train
  display flex
  height 100%
  width 100%
  align-items flex-end
  justify-content flex-end
  
.locomotive
  margin-bottom 30px

.tail 
  display: inline-block;
  width: 10px;
  height: 2px;
  background-color: yellow;
  margin-bottom: 10px;

.mickey
  position relative
  left: 20px;
  background: #242424;
  top: 15px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  &:before
    content: '';
    position: absolute;
    left: -4px;
    top: -4px;
    width: 10px;
    height: 10px;
    background: #242424;
    border-radius: 50%;
  &:after
    content: '';
    position: absolute;
    right: -4px;
    top: -4px;
    width: 10px;
    height: 10px;
    background: #242424;
    border-radius: 50%;

.wagon,
.cabin,
.chimney {
  border-radius: 4px 4px 0 0;
  border-top: 4px solid yellow;
}

.wagon,
.motor {
  border-bottom: 2px solid yellow;
}

.wagon,
.locomotive {
  display: inline-block;
  width: 70px;
  height: 55px;
  background-color: #fcc;
  position: relative;
}


/*WHEELS*/

.wagon:before,
.wagon:after,
.motor:before,
.motor:after,
.cabin:after {
  content: ' ';
  color: #fff;
  padding: 6px;
  position: absolute;
  border-radius: 46%;
  border: 6px solid #333;
  bottom: -10px;
  background-color: #666;
  -webkit-animation: spin 4s linear infinite;
  -moz-animation: spin 4s linear infinite;
  animation: spin 4s linear infinite;
}

.wagon:before {
  left: 6px;
}

.wagon:after {
  right: 6px;
}

.motor:before {
  left: 32px;
}

.motor:after {
  right: 4px;
}

.cabin:after {
  bottom: -50px;
  padding: 8px;
  left: 3px;
}


/*LOCOMOTIVE*/

.locomotive {
  background-color: transparent;
  transform scaleX(-1)
}

.locomotive .cabin {
  width: 58px;
  height: 35px;
  background-color: #fcc;
  position: relative;
  z-index: 1;
  border-radius: 8px 8px 0 0;
}


/*locomotive window*/

.locomotive .cabin:before {
  content: ' ';
  width: 25px;
  height: 18px;
  position: absolute;
  top: 10px;
  left: 15px;
  border-radius: 3px;
  border: 3px solid pink;
  background-color: #f1f1f1;
  display none
}

.locomotive .motor {
  display: inline-block;
  width: 85px;
  height: 41px;
  margin-top: -1px;
  background-color: #fcc;
  position: relative;
  border-radius: 0 8px 0px 0px;
}

.locomotive .chimney {
  position: absolute;
  width: 15px;
  height: 15px;
  background-color: #fcc;
  right: -6px;
  bottom: 10px;
  -webkit-animation: puf 4s 2;
  animation: puf 4s 2;
}

.locomotive .light {
  content: " ";
  position: absolute;
  right: -10px;
  bottom: 0;
  border-radius: 50%;
  border: 3px solid #e0f074;
}

.train {
  -webkit-animation: voyage 20s linear infinite;
  animation: voyage 20s linear infinite;
}
</style>
