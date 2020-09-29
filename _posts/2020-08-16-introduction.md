---
layout: post
date: 2020-08-16 00-00
title: "History-based Model Repair Recommendations"
description: Introduction to ReVision
comments: false
---

Models in Model-Driven Engineering are heavily edited in all stages of software development and can become temporarily inconsistent. In general, there are many alternatives to fix an inconsistency, the actual choice is left to the discretion of the developer. Model repair tools should support developers by proposing a short list of repair alternatives. Such recommendations will be only accepted in practice if the generated proposals are plausible and understandable. 

ReVision proposes a new approach to generate repair proposals which is based on the assumption that inconsistencies are introduced by incomplete editing processes which can be located in the version history of a model. Such an incomplete editing process is either  undone or it is extended to a full execution of a consistency-preserving edit operation. We showcase the usage and benefits of our repair tool ReVision using a simplified multi-view UML model of a video on demand system.

### Tooldemo

* <a href="https://youtu.be/k2OaGVwBnf8" target="new">Watch the ReVision Tooldemo on YouTube</a>
* <strong>Running Example Introduction: &#91;0:35&#93;:</strong> <a href="https://youtu.be/k2OaGVwBnf8?t=35" target="new">VoD-System Example</a>
* <strong>History Analysis: &#91;2:03&#93;:</strong> <a href="https://youtu.be/k2OaGVwBnf8?t=123" target="new">Understanding the Inconsistency</a>
* <strong>First Corrective Edit Step: &#91;3:45&#93;:</strong> <a href="https://youtu.be/k2OaGVwBnf8?t=225" target="new">Correction of the Message Receiver</a>
* <strong>Second Corrective Edit Step:&#91;4:21&#93;:</strong> <a href="https://youtu.be/k2OaGVwBnf8?t=261" target="new">Correction of the Message Sender</a>

<iframe width="560" height="315" src="https://www.youtube.com/embed/k2OaGVwBnf8" frameborder="0" allowfullscreen></iframe>

### ReVision for Eclipse 2020-06 Released

<figure class="aligncenter">
	<a href="assets/img/2019-04-24-2019-03-release.png" target="_blank">
	<img style="width: 100%" src="assets/img/2019-04-24-2019-03-release.png"/></a>
</figure>

[Getting Started](gettingstarted)
