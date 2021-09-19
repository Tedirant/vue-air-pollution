<template>
  <div class="sample-header">
  <div class="sample-header-section">
    <!-- <h1>Scroll down to see the parallax effect</h1> -->
  </div>
</div>
<div class="sample-section-wrap">
  <div class="sample-section">
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
      quis, sem. Nulla consequat massa quis enim. </p>

    <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
      vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
      ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. </p>

    <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut
      libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. </p>

    <p>Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut,
      mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. </p>
  </div>
</div>
</template>

<style scoped>
.webmadewell {
  background-color: white;
}
body {
  margin: 0;
}
.sample-header {
    left: 0;
    top: 0;
    width: 100%;
    background-image: url(http://webmadewell.com/wp-content/uploads/2018/01/img-bg-sample-parallax-header.jpg);
    background-position: center;
    background-repeat: no-repeat;
}
.sample-header-section {
  position: relative;
  padding: 15% 0 10%;
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
  color: white;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  font-family: "Montserrat", sans-serif;
}
h1 {
  font-weight: 500;
}
h2 {
  font-weight: 400;
}
.sample-section-wrap {
  position: relative;
  background-color: white;
}
.sample-section {
  position: relative;
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px;
}
</style>