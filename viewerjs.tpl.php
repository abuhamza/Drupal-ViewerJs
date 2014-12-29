<div class="viewerjs-field-item">
  <div class="viewerjs-item-wrapper <?php print $color; ?>"
       style="<?php ($thumbnail) ? print $thumbnail : print ''; ?>">
    <header>
      <div class="name">
        <?php print $icon; ?><b><?php print $filename; ?></b>
      </div>
      <span class="size">
        <ul class="actions">
          <li><?php print $size; ?></li>
          <li><?php print render($download_link); ?></li>
          <?php if ($preview_link): ?>
            <li><?php print render($preview_link); ?></li>
          <?php endif; ?>
        </ul>
  </div>
  </header>
</div>