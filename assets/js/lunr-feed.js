---
---
var hostname = "{{site.url}}{{site.baseurl}}";
var index = lunr(function () {
    this.field('title')
    this.field('content', {boost: 10})
    this.field('category')
    this.field('tags')
    this.ref('id')
});

{% assign count = 0 %}
{% for post in site.posts %}
    index.add({
      title: {{post.title | jsonify}},
      category: {{post.category | jsonify}},
      content: {{post.content | strip_html | jsonify}},
      tags: {{post.tags | jsonify}},
      id: {{count}}
    });
    {% assign count = count | plus: 1 %}
{% endfor %}{% for page in site.pages %}{% if page.title %}
    index.add({
      title: {{page.title | jsonify}},
      category: {{page.categories | jsonify}},
      content: {{page.content | strip_html | jsonify}},
      tags: {{page.tags | jsonify}},
      id: {{count}}
    });
    {% assign count = count | plus: 1 %}
{% endif %}{% endfor %}

{% assign firstPage = false %}
var store = [{% for post in site.posts %}{
    "title": {{post.title | jsonify}},
    "link": {{ post.url | jsonify }},
    "image": {{ post.image | jsonify }},
    "date": {{ post.date | date: '%B %-d, %Y' | jsonify }},
    "category": {{ post.category | jsonify }},
    "excerpt": {{ post.content | strip_html | truncatewords: 20 | jsonify }}
}{% unless forloop.last %},{% endunless %}{% endfor %}{% for page in site.pages %}{% if page.title %}{% if firstPage == false %}{% assign firstPage = true %},{% endif %}
{
    "title": {{page.title | jsonify}},
    "link": {{ page.url | jsonify }},
    "image": {{ page.image | jsonify }},
    "date": {{ page.date | date: '%B %-d, %Y' | jsonify }},
    "category": {{ page.categories | jsonify }},
    "excerpt": {{ page.content | strip_html | truncatewords: 20 | jsonify }}
}{% unless forloop.last %},{% endunless %}{% endif %}{% endfor %}]

$(document).ready(function() {
    $('#search-input').on('keyup', function () {
        var resultdiv = $('#results-container');
        if (!resultdiv.is(':visible'))
            resultdiv.show();
        var query = $(this).val();
        var result = index.search(query);
        resultdiv.empty();
        $('.show-results-count').text(result.length + ' Results');
        for (var item in result) {
            var ref = result[item].ref;
            var searchitem = '<li><a href="'+ hostname + store[ref].link+'">'+store[ref].title+'</a></li>';
            resultdiv.append(searchitem);
        }
    });
});
