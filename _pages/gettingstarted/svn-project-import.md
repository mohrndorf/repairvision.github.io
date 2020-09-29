---
layout: page
title:  "SVN Project Import"
permalink: "/gettingstarted/svn-project-import"
exclude: true
---

{% capture folderpath %}{{ site.url }}/{{ page.path | remove: page.name }}{% endcapture %}

{% assign exampleproject = 'https://github.com/mohrndorf/revision-example.git' %}

{% assign fig = 0 %}

{% assign fig = fig | plus: 1 %}
{% assign fig_step5 = fig %}

{% assign fig = fig | plus: 1 %}
{% assign fig_step6 = fig %}

{% assign fig = fig | plus: 1 %}
{% assign fig_step7 = fig %}

#### Step 2: Setting up the Example Project (with SVN)

##### Step 2.1: Adding the Example Repository (with SVN)

In the following, we will add the repository to our video-on-demand example model. To do so, click open perspective from the 'Window' menu and select 'SVN Repository Exploring', then click on the 'Open' Button (see <a href="#fig:{{ fig_step5 }}">Figure {{ fig_step5 }}</a>).

<figure class="aligncenter">
	<a href="{{folderpath}}images/05-svn.png" target="_blank">
	<img style="width: 400px" id="fig:{{ fig_step5 }}" src="{{folderpath}}images/05-svn.png"/></a>
	<figcaption style="text-align: center">Fig. {{ fig_step5 }}: Adding the Repository perspective </figcaption>
</figure>

In this step, you should add the example repository by clicking on 'New Repository Location' from the 'File' menu and copy the repository URL (__{{ exampleproject }}__). (ReVision currently only support SVN, so we have to import the Git repository via SVN.) At the end, click on 'Finish' button (see <a href="#fig:{{ fig_step6 }}">Figure {{ fig_step6 }}</a>).

<figure class="aligncenter">
	<a href="{{folderpath}}images/06-svn.png" target="_blank">
	<img style="width: 400px" id="fig:{{ fig_step6 }}" src="{{folderpath}}images/06-svn.png"/></a>
	<figcaption style="text-align: center">Fig. {{ fig_step6 }}: Setup the location of the repository </figcaption>
</figure>

##### Step 2.2: Importing the Example Project (with SVN)

Now, it's time to check out the example from the repository. To do so, right click on the project folder and select 'Check Out' from option menu (see <a href="#fig:{{ fig_step7 }}"> Figure {{ fig_step7 }}</a>).

<figure class="aligncenter">
	<a href="{{folderpath}}images/07-svn.png" target="_blank">
	<img style="width: 400px" id="fig:{{ fig_step7 }}" src="{{folderpath}}images/07-svn.png"/></a>
	<figcaption style="text-align: center">Fig. {{ fig_step7 }}: Check-out the example project</figcaption>
</figure>