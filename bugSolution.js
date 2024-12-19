```javascript
<div class="bg-blue-500 p-4 bg-gradient-to-r from-blue-500 to-purple-500">
  <!-- Content here -->
</div>

/* OR using a fallback in CSS with vendor prefixes */

.bg-gradient-to-r {
  background-image: linear-gradient(to right, #6366f1, #a855f7);
  background-image: -webkit-linear-gradient(to right, #6366f1, #a855f7); /* fallback for Safari */
  background-image: -moz-linear-gradient(to right, #6366f1, #a855f7); /* fallback for Firefox */
}
```