---
layout: page
---

{% for post in site.posts %}
  <div class="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" {% if forloop.first %}checked="checked"{% endif %}  />
    <div class="collapse-title text-xl font-medium">
      {{ post.title }}
    </div>
    <div class="collapse-content">
        {{post.excerpt}}

        <a href="{{post.url}}"><button class="btn">Read more</button></a>

    </div>
  </div>
{% endfor %}
