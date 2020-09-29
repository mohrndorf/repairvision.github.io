---
layout: page
title:  "Publications and Literature"
permalink: "/publications/"
exclude: false
order: 6
---

{% capture folderpath %}{{ site.url }}/{{ page.path | remove: page.name }}{% endcapture %}

<style>

.button {
  display: inline-block;
  border-radius: 4px;
  background-color: #1abc9c;
  border: 2px solid #1abc9c;
  color: white;
  text-align: center;
  font-size: 15px;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.button:hover {
  background-color: white; 
  color: white;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;

}

.button:hover span {
  color: #1abc9c;
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}

.dv {
  border: 2px solid lightgray;
  border-radius: 20px;
  margin: 2px 2px 2px;
  padding: 15px;
  background-color: white;
}

</style>

#### Repair Examples

[Examples of model inconsistencies and their repairs collected from the literature.](/repairexamples/)
  
#### ReVision: A Tool for History-Based Model Repair Recommendations

In: 2018 IEEE/ACM 40th International Conference on Software Engineering: Companion (ICSE-Companion). Gothenburg, Sweden. May 27 - June 3, 2018.

_Manuel Ohrndorf, Christopher Pietsch, Udo Kelter, Timo Kehrer_

<details>
<summary><strong>Read Abstract:</strong></summary>
<div class="dv"><p align="justify"> 
Models in Model-Driven Engineering are heavily edited in all stages of software development and can become temporarily inconsistent. In general, there are many alternatives to fix an inconsistency, the actual choice is left to the discretion of the developer. Model repair tools should support developers by proposing a short list of repair alternatives. Such recommendations will be only accepted in practice if the generated proposals are plausible and understandable. Current approaches, which mostly focus on fully automatic, non-interactive model repairs, fail in meeting these requirements. This paper proposes a new approach to generate repair proposals for inconsistencies that were introduced by incomplete editing processes which can be located in the version history of a model. Such an incomplete editing process is extended to a full execution of a consistency-preserving edit operation. We demonstrate our repair tool \toolname using a simplified multi-view UML model of a video on demand system, a screencast is provided at http://pi.informatik.uni-siegen.de/projects/SiLift/icse2018/.
</p></div>
</details>

<img src="{{folderpath}}images/2018icse.png" itemprop="image" style="margin:auto; width:100%">

<button class="button" style="vertical-align:middle" onclick="window.open('https://ieeexplore.ieee.org/abstract/document/8449456', '_blank')"><span>Read Paper</span></button>

#### Behandlung von Inkonsistenzen in der verteilten Bearbeitung materialisierter Sichten im Kontext der modellbasierten Softwareentwicklung

Master's Thesis. University of Siegen. 2017.

_Manuel Ohrndorf_

<details>
<summary><strong>Read Abstract:</strong></summary>
<div class="dv"><p align="justify"> 
In software development, models are used for system analysis and design. In model-driven software development, models are primary artifacts and the formal basis for the system implementation. A model is an abstraction layer which conceals the technical target platform. This increases the reusability of the developed components.However, this requires the definition of a formal syntax and semantics for the modeling language. Models are usually expressed from various viewpoints, e.g. the data structure and a user interaction. A multi-view modeling environment can be used to build complex system models. A viewpoint can also be constructed by slicing a specific part of the model. This can be helpful in distributing and processing large models across a development team. However, a developer can inadvertently introduce inconsistencies between different views. Ensuring the correctness of a model is a key task of the development process. Therefore, the developers need fully-fledged tool support to deal with inconsistencies.  This work presents an approach to the repair of inconsistencies in a distributed multi-view modeling environment. The introduced tool determines repairs based on user-defined edit rules. To understand the cause of an inconsistency, the repair algorithm considers the modifications which have introduced the inconsistency.
</p></div>
</details>

<img src="{{folderpath}}images/2017thesis.png" itemprop="image" style="margin:auto; text-align:left; width:100%">

<button class="button" style="vertical-align:middle" onclick="window.open('http://pi.informatik.uni-siegen.de/mohrndorf/downloads/2017-04-29_mohrndorf_MA2017.pdf', '_blank')"><span>Read Thesis</span></button>
