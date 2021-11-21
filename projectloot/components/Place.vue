<template>
  <div
    class="d-flex flex-column justify-content-center align-items-center h-100"
  >
    <div class="row">
      <div class="col">
        <h2 class="mb-5"><sup class="m-2">My</sup>{{key}}</h2>
      </div>
    </div>
    <div class="_badge-bundle d-flex justify-content-center align-items-center">
      <!-- <div class="_A_shadow legendary">
        <div class="_A_levitate">
          <div class="_badge set">
            <div class="_pattern"></div>
            <div class="_item">
              <i class="fas fa-frog"></i>
            </div>
          </div>
        </div>
      </div> -->
      <div class="_A_shadow legendary">
        <div class="_A_levitate">
          <div class="_badge legendary">
            <div class="_pattern"></div>
            <div class="_item">
              <i class="fas fa-frog"></i>
              <div class="_wallet_jewel">
                <div class="_jewel"></div>
                <div class="_jewel"></div>
                <div class="_jewel"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="_A_shadow epic">
        <div class="_A_levitate">
          <div class="_badge epic">
            <div class="_pattern"></div>
            <div class="_item">
              <i class="fas fa-hard-hat"></i>
              <div class="_jewel"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="_A_shadow rare">
        <div class="_A_levitate">
          <div class="_badge rare">
            <div class="_pattern"></div>
            <div class="_item">
              <i class="fas fa-hat-wizard"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="_A_shadow common">
        <div class="_A_levitate">
          <div class="_badge common">
            <div class="_pattern"></div>
            <div class="_item">
              <i class="fas fa-hard-hat"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Place extends Vue {
  key = "DugLoot";
}
</script>

<style lang="scss" scoped>
$children: 4;
$animation-timing: 4s;
* {
  color: #fff;
}

._badge-bundle {
  //   ._A_shadow:nth-of-type(1) {
  //     animation-delay: 1s;
  //   }
  //   ._A_shadow:nth-of-type(2) {
  //     animation-delay: 1.2s;
  //   }
  //   ._A_shadow:nth-of-type(3) {
  //     animation-delay: 1.5s;
  //   }
  //   ._A_shadow:nth-of-type(4) {
  //     animation-delay: 2s;
  //   }
  ._A_shadow {
    padding: 0.3rem 1rem;
    &:hover {
      &::after {
        animation: none;
        opacity: 0 !important;
        animation-play-state: paused;
      }
    }
    position: relative;
    &:after {
      animation: anti-float $animation-timing ease-in-out infinite;
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      // filter: blur(4px);
      // opacity: 0.2;
      height: 7px;
      border-radius: 100%;
      background: #000;
    }
  }
  ._A_levitate {
    position: relative;
    animation: float $animation-timing ease-in-out infinite;
    &:hover {
      animation: none;
      animation-play-state: paused;
    }
  }
}

@keyframes float {
  0% {
    transform: translatey(5px);
  }
  50% {
    transform: translatey(-12px);
  }
  100% {
    transform: translatey(5px);
  }
}
@keyframes rotate {
  from {
    transform: scale(1.5) rotate(0deg);
  }
  to {
    transform: scale(1.5) rotate(360deg);
  }
}

@keyframes anti-float {
  0% {
    transform: scaleX(0.8) scaleY(0.5);
    opacity: 0.3;
    filter: blur(1px);
  }
  50% {
    transform: scaleX(1) scaleY(1);
    opacity: 0.15;
    filter: blur(3px);
  }
  100% {
    opacity: 0.3;
    filter: blur(1px);
    transform: scaleX(0.8) scaleY(0.5);
  }
}

._badge {
  ._item {
    > i {
      opacity: 0.9;
      font-size: 3rem;
      text-shadow: 0px 0px 7px rgba(0, 0, 0, 0.2);
    }
  }

  transition: all 0.1s ease-in-out;
  cursor: pointer;
  &:hover {
    transition: all 0.35 ease-in-out;
    margin: 3rem;
    animation: none;
    animation-play-state: paused;
    transition: all 0.2s ease-in-out;
    transform: scale(1.2) translateY(-30px);
    filter: saturate(1) brightness(1.1);
  }
  &:active {
    transition: all 0.1s ease-in-out;
    transform: scale(0.8);
  }
  position: relative;
  &::before {
    border-radius: 20px;
    display: block;
    content: "";
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0) 50%
    );
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 2px;
  }
  &::after {
    content: "";
    pointer-events: none;
    border-radius: 20px;
    position: absolute;
    left: 0;
    top: 0px;
    right: 0;
    bottom: 0;
    z-index: -1;
    display: block;
  }
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
  border-radius: 20px;
  border: 3px solid white;
  box-shadow: inset 1px 2px 24px 4px rgba(#000, 0.6),
    1px 2px 24px 4px rgba(#000, 0.2);
  &.legendary {
    ._jewel{
      &::before {
    border-radius: 20px;
    display: block;
    content: "";
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0) 50%
    );
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 2px;
  }
      width: 15px;
      height: 20px;
        background: radial-gradient(
      circle,
      rgb(214, 203, 48) 0%,
      rgb(214, 203, 48) 20%,
     
    );
     border: 3px solid white;
  box-shadow: 
    1px 2px 24px 4px rgba(#000, 0.2);

    border-radius: 50%;
      position: absolute;
      bottom: 0;
      left: 50%;
      
      transform: translate(-50%,50%);
    }
    ._pattern {
      border-radius: 100%;
      animation: rotate $animation-timing * 4 linear infinite;
      opacity: 0.02;
      background-size: 350%;
      background-position: center center;
      background-image: url(./../assets/legendary.svg);
    }
    background: radial-gradient(
      circle,
      rgb(214, 203, 48) 0%,
      rgb(214, 203, 48) 20%,
      rgba(255, 174, 0, 1) 100%
    );
    &:after {
      box-shadow: 0px 0px 60px 4px rgba(255, 174, 0, 0.3);
    }
    &:hover {
      box-shadow: 0px 0px 150px 4px rgba(255, 174, 0, 0.4);
    }
  }
  &.set {
    ._pattern {
      border-radius: 100%;
      animation: rotate $animation-timing * 4 linear infinite;
      opacity: 0.02;
      background-size: 350%;
      background-position: center center;
      background-image: url(./../assets/legendary.svg);
    }
   background: radial-gradient(circle, rgba(206,255,0,1) 0%, rgba(56,227,25,1) 50%, rgba(2,122,0,1) 100%);
    &:after {
      box-shadow: 0px 0px 60px 4px rgba(206,255,0,2);
    }
    &:hover {
      box-shadow: 0px 0px 150px 4px rgba(206,255,0,2);
    }
  }
  ._pattern {
    border-radius: 20px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    // background-blend-mode: multiply;
    background-size: cover;
  }
  &.epic {
       ._jewel{
      &::before {
    border-radius: 20px;
    display: block;
    content: "";
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0) 50%
    );
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 2px;
  }
      width: 15px;
      height: 20px;
        background: radial-gradient(
      circle,
      rgba(255, 128, 231, 1) 0%,
      rgba(239, 0, 255, 1) 0%,
     
    );
     border: 3px solid white;
  box-shadow: 
    1px 2px 24px 4px rgba(#000, 0.2);

    border-radius: 50% 0;
      position: absolute;
      bottom: 0;
      left: 50%;
      
      transform: translate(-50%,50%);
    }
    ._pattern {
      opacity: 0.05;
      background-image: url(./../assets/epic.svg);
    }
    // background-color: rgba(255, 128, 231, 1);
    background: radial-gradient(
      circle,
      rgba(255, 128, 231, 1) 0%,
      rgba(239, 0, 255, 1) 0%,
      rgba(128, 60, 255, 1) 100%
    );
    &:hover {
      box-shadow: 0px 0px 60px 4px rgba(255, 128, 231, 0.4);
    }
    &:after {
      box-shadow: 0px 0px 40px 4px rgba(255, 128, 231, 0.3);
    }
  }
  &.rare {
    ._pattern {
      background-size: 75%;
      opacity: 0.05;
      background-image: url(./../assets/rare.svg);
    }
    background: radial-gradient(
      circle,
      rgba(0, 194, 255, 1) 0%,
      rgba(60, 77, 255, 1) 100%
    );
    &:after {
      box-shadow: 0px 0px 40px 4px rgba(0, 194, 255, 0.3);
    }
  }
  &.common {
    background: radial-gradient(
      circle,
      rgba(196, 196, 196, 1) 0%,
      rgba(110, 110, 110, 1) 100%
    );
  }
}
</style>