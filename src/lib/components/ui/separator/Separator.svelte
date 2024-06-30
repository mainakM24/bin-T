<div class="separator mt-2">or</div>

<style>
    .separator {
  display: flex;
  align-items: center;
  text-align: center;
}

.separator::before,
.separator::after {
  content: '';
  flex: 1;
  border-bottom: 0.1px solid grey;
}

.separator:not(:empty)::before {
  margin-right: .30em;
}

.separator:not(:empty)::after {
  margin-left: .30em;
}
</style>