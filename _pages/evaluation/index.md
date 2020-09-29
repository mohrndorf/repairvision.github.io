---
layout: page
title:  "Evaluation"
permalink: "/evaluation/"
exclude: false
order: 5
---

{% capture folderpath %}{{ site.url }}/{{ page.path | remove: page.name }}{% endcapture %}

#### Experimental Tool Configuration

__Ecore Consistency Rules:__ [The constraints for Ecore which we have been defined and evaluated with ReVision can be found here.](/consistencyrules/)

<figure class="aligncenter">
	<a href="{{folderpath}}images/consistency-example-interface-constraint.png" target="_blank">
	<img style="width: 400px" id="fig:consistency-example-interface-constraint" src="{{folderpath}}images/consistency-example-interface-constraint.png"/></a>
</figure>

__Ecore Edit Rules:__ [The consistency-preserving edit operations (CPEOs) which we have been defined and evaluated with ReVision can be found here.](/editrules/)

<figure class="aligncenter">
	<a href="{{folderpath}}images/2_1_constraint_wizard.png" target="_blank">
	<img style="width: 550px" id="fig:consistency-example-interface-cpeo.png" src="{{folderpath}}images/consistency-example-interface-cpeo.png"/></a>
</figure>

__[All generated edit operations for Ecore can be browsed here](https://repairvision.github.io/_pages/editrules/ecore.html)__

#### Evaluation Subject

We evaluate our approach using real-world Ecore models from the Eclipse Git repositories. We extracted 28 model histories containing 638 resolved inconsistencies. These projects have a development time of more than a decade. The experimental data set can be found at [GitHub](https://github.com/repairvision/repairvision/tree/master/data.evaluation/org.eclipse.git_2018-08-22). The data set was processed in multiple steps:

1. We extracted the version history of each Ecore model by storing every _model version_ in a separate file.
   * The data set can be found at [org.eclipse.git_original.7z](https://github.com/repairvision/repairvision/blob/master/data.evaluation/org.eclipse.git_2018-08-22/org.eclipse.git_original.7z)
1. For every model version we resolved references to other models at the same versioning time. We store the set of models of each _evolution step_ in separted folder. We create a new evolution step every time one of the models in this set has a new version.
   * The data set can be found at [org.eclipse.git_resolved.7z](https://github.com/repairvision/repairvision/blob/master/data.evaluation/org.eclipse.git_2018-08-22/org.eclipse.git_resolved.7z)
1. We identified the corresponding (considered to be the same) model elements between the models of every evolution step and store each model element with an unique identifier.
   * The data set can be found at [org.eclipse.git_matched.7z](https://github.com/repairvision/repairvision/blob/master/data.evaluation/org.eclipse.git_2018-08-22/org.eclipse.git_matched.7z)
1. We validated and reduced the data set to those model histories that contain resolved inconsistencies. We also analyzed and stored the traces for each inconsistency in an additional history file.
   * The data set can be found at [org.eclipse.git_reduced.7z](https://github.com/repairvision/repairvision/blob/master/data.evaluation/org.eclipse.git_2018-08-22/org.eclipse.git_reduced.7z)
