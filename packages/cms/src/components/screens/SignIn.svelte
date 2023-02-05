<script>
  import picture from '../../assets/pictures/nasa-img.jpg';
</script>

<div class="grid grid-cols-[min(100%,640px)_1fr]">
  <div>
    <h1>Sign in</h1>
    <form>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
    </form>
    <button>Sign in</button>
  </div>

  <img
    class="sm:hidden justify-self-stretch items-self-stretch"
    src={picture}
    loading="lazy"
    alt=""
  />
</div>
