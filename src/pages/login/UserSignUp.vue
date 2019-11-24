<template>
  <q-page class="q-pa-lg column">
    <q-btn
      flat
      round
      icon="mdi-arrow-left"
      color="primary"
      class="q-mt-xs absolute-left"
      @click.prevent="goBack"
    />
    <div class="row justify-center">
      <div class="q-mt-md col-xs-11">
        <p class="q-pa-sm text-h4 text-start">Have a better focus, create an account today</p>
      </div>
    </div>
    <div class="q-mt-md row justify-end">
      <div class="q-gutter-md row justify-center">
        <div class="col-xs-12">
          <q-btn
            rounded
            no-caps
            class="full-width"
            color="red"
            align="center"
            label="Sign up with Google"
            icon="mdi-google"
            size="1.3em"
          />
        </div>
        <div class="col-xs-12">
          <q-btn
            rounded
            no-caps
            class="full-width"
            color="blue"
            align="center"
            label="Sign up with Facebook"
            icon="mdi-facebook"
            size="1.3em"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  methods: {
    goBack () {
      this.$router.back();
    }
  }
};
</script>

<style lang="sass" scoped>

</style>
