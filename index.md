---
layout: home
---

# Posts

{% for post in site.posts %}
* {{ post.title }}
{% endfor %}
