<template>
  <div class="train-tail">
    <div>
      <div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus">
.train-tail
  width 100%
  height 100%
  > div
    position relative
    width: 60px
    height: 100%;
    border-bottom: 2px solid #ff0;
    display flex
    align-items flex-end
    > div
      position relative
      background-color #fcc
      border-top-left-radius 5px
      border-top-right-radius 5px
      border-top: 2px solid #ff0;
      width 60px
      height 60px
      > div
        position: relative;
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
      &:after
        content: ' ';
        color: #fff;
        padding: 5px;
        position: absolute;
        border-radius: 46%;
        border: 6px solid #333;
        bottom: -11px;
        left: 22px;
        background-color: #666;
        -webkit-animation: spin 4s linear infinite;
        animation: spin 4s linear infinite;
</style>
