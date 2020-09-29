---
layout: page
title:  "Repair Examples"
permalink: "/repairexamples/"
exclude: true
order: 7
---

{% capture folderpath %}{{ site.url }}/{{ page.path | remove: page.name }}{% endcapture %}

{% assign fig = 0 %}

In this section we give some minimal examples of model inconsistencies and their repairs collected from the literature.

### Create Interface Operation

{% assign fig = fig | plus: 1 %}
{% assign fig_create_interface_operation_model_a = fig %}
{% assign fig = fig | plus: 1 %}
{% assign fig_create_interface_operation_model_b = fig %}
{% assign fig = fig | plus: 1 %}
{% assign fig_create_interface_operation_model_c = fig %}

This example is a simplified version of the running example in <a href="#TOLR2017">[TOLR2017]</a>. <a href="#fig:{{ fig_create_interface_operation_model_a }}">Figure {{ fig_create_interface_operation_model_a }}</a> depicts an UML class diagram consisting of an interface IA and a class A implementing this interface. A consistency rule demands that a class must implement all methods of the respective interface.

<figure class="aligncenter">
	<a href="{{folderpath}}images/create_interface_operation/model_a.svg" target="_blank">
	<img style="width: 400px" id="fig:{{ fig_create_interface_operation_model_a }}" src="{{folderpath}}images/create_interface_operation/model_a.svg" />
	</a>
	<figcaption style="text-align: center">Fig. {{ fig_create_interface_operation_model_a }}: Create Interface Operation - Model A</figcaption>
</figure>

In a next stept the interface IA is extended by a the operation signature op() as shown in <a href="#fig:{{ fig_create_interface_operation_model_b }}">Figure {{ fig_create_interface_operation_model_b }}</a> introducing an inconsistency regarding the consisteny rule mentioned above. The implementation of the operation is missing in class A.

<figure class="aligncenter">
	<a href="{{folderpath}}images/create_interface_operation/model_b.svg" target="_blank">
	<img style="width: 400px" id="fig:{{ fig_create_interface_operation_model_b }}" src="{{folderpath}}images/create_interface_operation/model_b.svg" />
	</a>
	<figcaption style="text-align: center">Fig. {{ fig_create_interface_operation_model_b }}: Create Interface Operation - Model B</figcaption>
</figure>

The introcued inconsistency could be fixed in several ways, e.g.:

* remove the operation signature op() from the interface IA, i.e. perform a simple undo.
* remove the association between the interface IA and the class A.
* Add a new operation op() in class A, i.e. implement the operation op() of the interface IA as shown in <a href="#fig:{{ fig_create_interface_operation_model_c }}">Figure {{ fig_create_interface_operation_model_c }}</a>.

<figure class="aligncenter">
	<a href="{{folderpath}}images/create_interface_operation/model_c.svg" target="_blank">
	<img style="width: 400px" id="fig:{{ fig_create_interface_operation_model_c }}" src="{{folderpath}}images/create_interface_operation/model_c.svg" />
	</a>
	<figcaption style="text-align: center">Fig. {{ fig_create_interface_operation_model_c }}: Create Interface Operation - Model C</figcaption>
</figure>

### Create Message Signature

{% assign fig = fig | plus: 1 %}
{% assign fig_create_message_signature_a = fig %}
{% assign fig = fig | plus: 1 %}
{% assign fig_create_message_signature_b = fig %}
{% assign fig = fig | plus: 1 %}
{% assign fig_create_message_signature_c = fig %}

This is a standard example motivating the problem of editing multiple model views of a model which depend on each other. It serves as running example, among others, in <a href="#MnJC17">[MnJC17]</a> and <a href="#TOLR2017">[TOLR2017]</a>.

<a href="#fig:{{ fig_create_message_signature_a }}">Figure {{ fig_create_message_signature_a }}</a> shows an UML model from different point of views. The class diagram represents the static structure of the system and consists of the two classes A and B and an association connecting the classes via the properties a and b. The sequence diagram represents the dynamic view, i.e. the behavoir of one scenario using liflines and messages. A lifline represents a property of a class, e.g., a:A represents the property a of the class A.

A consistency rule demands that the signature of a message in a sequence diagram must be identical to the signature of an operation of the class referenced by the receiving lifeline.

<figure class="aligncenter">
	<a href="{{folderpath}}images/create_message_signature/model_a.svg" target="_blank">
	<img style="width: 400px" id="fig:{{ fig_create_message_signature_a }}" src="{{folderpath}}images/create_message_signature/model_a.svg" />
	</a>
	<figcaption style="text-align: center">Fig. {{ fig_create_message_signature_a }}: Create Message Signature - Model A</figcaption>
</figure>

In <a href="#fig:{{ fig_create_message_signature_b }}">Figure {{ fig_create_message_signature_b }}</a> a new message with the signature op is added to the sequence diagram leading to an inconsistency. The class B referenced by the receiving lifeline of the message op does not contain an operation having the same signature like the message.

<figure class="aligncenter">
	<a href="{{folderpath}}images/create_message_signature/model_b.svg" target="_blank">
	<img style="width: 400px" id="fig:{{ fig_create_message_signature_b }}" src="{{folderpath}}images/create_message_signature/model_b.svg" />
	</a>
	<figcaption style="text-align: center">Fig. {{ fig_create_message_signature_b }}: Create Message Signature - Model B</figcaption>
</figure>

The introcued inconsistency could be fixed in several ways, e.g.:

* remove the message with the signature op, i.e. perform a simple undo
* add a new operation having the same signature like the new message as shown in <a href="#fig:{{ fig_create_message_signature_c }}">Figure {{ fig_create_message_signature_c }}</a>.

<figure class="aligncenter">
	<a href="{{folderpath}}images/create_message_signature/model_c.svg" target="_blank">
	<img style="width: 400px" id="fig:{{ fig_create_message_signature_c }}" src="{{folderpath}}images/create_message_signature/model_c.svg" />
	</a>
	<figcaption style="text-align: center">Fig. {{ fig_create_message_signature_c }}: Create Message Signature - Model C</figcaption>
</figure>

### Create Transition and Event

{% assign fig = fig | plus: 1 %}
{% assign fig_create_transition_and_event_a = fig %}
{% assign fig = fig | plus: 1 %}
{% assign fig_create_transition_and_event_b = fig %}
{% assign fig = fig | plus: 1 %}
{% assign fig_create_transition_and_event_c = fig %}

An similar example of the previous one has been depicted in <a href="POKK17">[POKK17]</a> between state machines and class diagramms. <a href="#fig:{{ fig_create_transition_and_event_a }}">Figure {{ fig_create_transition_and_event_a }}</a> shows an UML model consisting of the class A and the state machine StateMachineA. The state machine consistes of the two states A and B. A consistency rule may demand that a transition is always triggered by an event, which usually refer to an operation of a class.

<figure class="aligncenter">
	<a href="{{folderpath}}images/create_transition_and_event/model_a.svg" target="_blank">
	<img style="width: 600px" id="fig:{{ fig_create_transition_and_event_a }}" src="{{folderpath}}images/create_transition_and_event/model_a.svg" />
	</a>
	<figcaption style="text-align: center">Fig. {{ fig_create_transition_and_event_a }}: Create Transition and Event - Model A</figcaption>
</figure>

In <a href="#fig:{{ fig_create_transition_and_event_b }}">Figure {{ fig_create_transition_and_event_b }}</a> a transition is added to the state machine leading to an inconsistency. The event of the new transition does not refer to an operation.

<figure class="aligncenter">
	<a href="{{folderpath}}images/create_transition_and_event/model_b.svg" target="_blank">
	<img style="width: 600px" id="fig:{{ fig_create_transition_and_event_b }}" src="{{folderpath}}images/create_transition_and_event/model_b.svg" />
	</a>
	<figcaption style="text-align: center">Fig. {{ fig_create_transition_and_event_b }}: Create Transition and Event - Model B</figcaption>
</figure>

The introcued inconsistency could be fixed in several ways, e.g.:

* remove the transition, i.e. perform a simple undo
* set the operation op of class A as event of the transition that as illustratrated in <a href="#fig:{{ fig_create_transition_and_event_c }}">Figure {{ fig_create_transition_and_event_c }}</a> using equal names

<figure class="aligncenter">
	<a href="{{folderpath}}images/create_transition_and_event/model_c.svg" target="_blank">
	<img style="width: 600px" id="fig:{{ fig_create_transition_and_event_c }}" src="{{folderpath}}images/create_transition_and_event/model_c.svg" />
	</a>
	<figcaption style="text-align: center">Fig. {{ fig_create_transition_and_event_c }}: Create Transition and Event - Model C</figcaption>
</figure>

### Invert Inheritance

{% assign fig = fig | plus: 1 %}
{% assign fig_invert_inheritance_a = fig %}
{% assign fig = fig | plus: 1 %}
{% assign fig_invert_inheritance_b = fig %}
{% assign fig = fig | plus: 1 %}
{% assign fig_invert_inheritance_c = fig %}

This example has been extracted from <a href="#MnGC13">[MnGC13]</a>. <a href="#fig:{{ fig_invert_inheritance_a }}">Figure {{ fig_invert_inheritance_a }}</a> depicts an UML class diagram consisting of the classes A and B. The class A inherits form the class B via the genralization relation. A consistency rule demands that such a generalization relation must be acyclic.

<figure class="aligncenter">
	<a href="{{folderpath}}images/invert_inheritance/model_a.svg" target="_blank">
	<img style="width: 400px" id="fig:{{ fig_invert_inheritance_a }}" src="{{folderpath}}images/invert_inheritance/model_a.svg" />
	</a>
	<figcaption style="text-align: center">Fig. {{ fig_invert_inheritance_a }}: Invert Inheritance - Model A</figcaption>
</figure>

In <a href="#fig:{{ fig_invert_inheritance_b }}">Figure {{ fig_invert_inheritance_b }}</a> the consistency rule is violated by the creation of the new generalization relation from the class B to the class A.

<figure class="aligncenter">
	<a href="{{folderpath}}images/invert_inheritance/model_b.svg" target="_blank">
	<img style="width: 400px" id="fig:{{ fig_invert_inheritance_b }}" src="{{folderpath}}images/invert_inheritance/model_b.svg" />
	</a>
	<figcaption style="text-align: center">Fig. {{ fig_invert_inheritance_b }}: Invert Inheritance - Model B</figcaption>
</figure>

The introcued inconsistency could be fixed in several ways, e.g.:

* remove the new generalization, i.e. perform a simple undo
* remove the old generalization from class A to class B as shown in <a href="#fig:{{ fig_invert_inheritance_c }}">Figure {{ fig_invert_inheritance_c }}</a>.

<figure class="aligncenter">
	<a href="{{folderpath}}images/invert_inheritance/model_c.svg" target="_blank">
	<img style="width: 400px" id="fig:{{ fig_invert_inheritance_c }}" src="{{folderpath}}images/invert_inheritance/model_c.svg" />
	</a>
	<figcaption style="text-align: center">Fig. {{ fig_invert_inheritance_c }}: Invert Inheritance - Model C</figcaption>
</figure>

### Reconnect Transition

{% assign fig = fig | plus: 1 %}
{% assign fig_reconnect_transition_a = fig %}
{% assign fig = fig | plus: 1 %}
{% assign fig_reconnect_transition_b = fig  %}
{% assign fig = fig | plus: 1 %}
{% assign fig_reconnect_transition_c = fig %}

Another example briefly mentioned in <a href="#TOLR2017">[TOLR2017]</a> is the deletion of the target state of a transition. <a href="#fig:{{ fig_reconnect_transition_a }}">Figure {{ fig_reconnect_transition_a }}</a> depicts an UML state machine consisting of the states A, B and C. The states A and B are connected via the transtion triggered by the event op.

<figure class="aligncenter">
	<a href="{{folderpath}}images/reconnect_transition/model_a.svg" target="_blank">
	<img style="width: 400px" id="fig:{{ fig_reconnect_transition_a }}" src="{{folderpath}}images/reconnect_transition/model_a.svg" />
	</a>
	<figcaption style="text-align: center">Fig. {{ fig_reconnect_transition_a }}: Reconnect Transition - Model A</figcaption>
</figure>

In <a href="#fig:{{ fig_reconnect_transition_b }}">Figure {{ fig_reconnect_transition_b }}</a>  the target state B of the transition is removed which leads to an inconsistency, since every transition must have extaxtly one source and target state.

<figure class="aligncenter">
	<a href="{{folderpath}}images/reconnect_transition/model_b.svg" target="_blank">
	<img style="width: 400px" id="fig:{{ fig_reconnect_transition_b }}" src="{{folderpath}}images/reconnect_transition/model_b.svg" />
	</a>
	<figcaption style="text-align: center">Fig. {{ fig_reconnect_transition_b }}: Reconnect Transition - Model B</figcaption>
</figure>

The introcued inconsistency could be fixed in several ways, e.g.:

* re-create the state B and set it as target state of the transition, i.e. perform a simple undo
* remove the transition
* set the state C as target state of the transition as shown in <a href="#fig:{{ fig_reconnect_transition_c }}">Figure {{ fig_reconnect_transition_c }}</a>.

<figure class="aligncenter">
	<a href="{{folderpath}}images/reconnect_transition/model_c.svg" target="_blank">
	<img style="width: 400px" id="fig:{{ fig_reconnect_transition_c }}" src="{{folderpath}}images/reconnect_transition/model_c.svg" />
	</a>
	<figcaption style="text-align: center">Fig. {{ fig_reconnect_transition_c }}: Reconnect Transition - Model C</figcaption>
</figure>

### Replace Operation Return Parameter

{% assign fig = fig | plus: 1 %}
{% assign fig_replace_operation_return_parameter_a = fig %}
{% assign fig = fig | plus: 1 %}
{% assign fig_replace_operation_return_parameter_b = fig %}
{% assign fig = fig | plus: 1 %}
{% assign fig_replace_operation_return_parameter_c = fig %}

This example has been extracted from <a href="#PjSM15">[PjSM15]</a>. <a href="#fig:{{ fig_replace_operation_return_parameter_a }}">Figure {{ fig_replace_operation_return_parameter_a }}</a> depicts an UML class diagram consisting of the class A. The class contains an operation op() with a return parameter of the type Integer. A consistency rule demands that an operation must not have more than one return parameter.

<figure class="aligncenter">
	<a href="{{folderpath}}images/replace_operation_return_parameter/model_a.svg" target="_blank">
	<img style="width: 200px" id="fig:{{ fig_replace_operation_return_parameter_a }}" src="{{folderpath}}images/replace_operation_return_parameter/model_a.svg" />
	</a>
	<figcaption style="text-align: center">Fig. {{ fig_replace_operation_return_parameter_a }}: Replace Operation Return Parameter - Model A</figcaption>
</figure>

In <a href="#fig:{{ fig_replace_operation_return_parameter_b }}">Figure {{ fig_replace_operation_return_parameter_b }}</a> a further return parameter of the type String is added to the operation op which violates the consistency rule. 

<figure class="aligncenter">
	<a href="{{folderpath}}images/replace_operation_return_parameter/model_b.svg" target="_blank">
	<img style="width: 200px" id="fig:{{ fig_replace_operation_return_parameter_b }}" src="{{folderpath}}images/replace_operation_return_parameter/model_b.svg" />
	</a>
	<figcaption style="text-align: center">Fig. {{ fig_replace_operation_return_parameter_b }}: Replace Operation Return Parameter - Model B</figcaption>
</figure>

The introcued inconsistency could be fixed in several ways, e.g.:

* remove the new return parameter, i.e. perform a simple undo
* remove the old return parameter as shown in <a href="#fig:{{ fig_replace_operation_return_parameter_c }}">Figure {{ fig_replace_operation_return_parameter_c }}</a>.

<figure class="aligncenter">
	<a href="{{folderpath}}images/replace_operation_return_parameter/model_c.svg" target="_blank">
	<img style="width: 200px" id="fig:{{ fig_replace_operation_return_parameter_c }}" src="{{folderpath}}images/replace_operation_return_parameter/model_c.svg" />
	</a>
	<figcaption style="text-align: center">Fig. {{ fig_replace_operation_return_parameter_c }}: Replace Operation Return Parameter - Model C</figcaption>
</figure>

### References

<ul>
<li id="MnGC13">Macedo, N., Guimaraes, T., & Cunha, A. (2013, November). Model repair and transformation with Echo. In 2013 28th IEEE/ACM International Conference on Automated Software Engineering (ASE) (pp. 694-697). IEEE. <a href="http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&amp;arnumber=6693135&amp;isnumber=6693054" target="_blank">read</a></li>
<li id="MnJC17">Macedo, N., Jorge, T., & Cunha, A. (2017). A feature-based classification of model repair approaches. IEEE Transactions on Software Engineering, 43(7), 615-640. <a href="http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&amp;arnumber=7605502&amp;isnumber=7981478" target="_blank">read</a></li>
<li id="POKK17">Pietsch, C., Ohrndorf, M., Kelter, U., & Kehrer, T. (2017, October). Incrementally slicing editable submodels. In Proceedings of the 32nd IEEE/ACM International Conference on Automated Software Engineering (pp. 913-918). IEEE Press. <a href="http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&amp;arnumber=8115704&amp;isnumber=8115603" target="_blank">read</a></li>
<li id="PjSM15">Puissant, J. P., Van Der Straeten, R., & Mens, T. (2015). Resolving model inconsistencies using automated regression planning. Software & Systems Modeling, 14(1), 461-481. <a href="https://link.springer.com/article/10.1007/s10270-013-0317-9" target="_blank">read</a></li>
<li id="TOLR2017">Taentzer, G., Ohrndorf, M., Lamo, Y., & Rutle, A. (2017, April). Change-preserving model repair. In International Conference on Fundamental Approaches to Software Engineering (pp. 283-299). Springer, Berlin, Heidelberg. <a href="https://link.springer.com/chapter/10.1007/978-3-662-54494-5_16" target="_blank">read</a></li>
</ul>
