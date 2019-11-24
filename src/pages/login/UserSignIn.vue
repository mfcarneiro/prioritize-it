<template>
  <q-page class="q-pa-lg column justify-between">
    <div class="row justify-center">
      <div class="col-xs-6">
        <img class="app-icon" src="../../../app-icon.png" alt="app-icon" />
      </div>
      <div class="q-mt-md col-xs-12 flex flex-center">
        <p class="q-pa-md text-h4">
          Start Prioritize
          <label class="text-h4 text-italic text-secondary">It!</label>
        </p>
      </div>
    </div>
    <div class="row justify-end">
      <div class="q-gutter-md row justify-center">
        <div class="col-xs-12">
          <q-btn
            rounded
            no-caps
            class="full-width"
            color="red"
            align="center"
            label="Continue with Google"
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
            label="Continue with Facebook"
            icon="mdi-facebook"
            size="1.3em"
          />
        </div>
        <div class="col-xs-12 text-body1 flex flex-center">Or</div>
        <div class="col-xs-12">
          <q-btn
            rounded
            outline
            no-caps
            class="full-width"
            color="primary"
            align="center"
            label="Create account"
            size="1.3em"
            to="/create-account"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

</style>
