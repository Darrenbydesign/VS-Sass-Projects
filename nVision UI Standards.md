# nVision Design Standards Guide


## Overview

The Bluescope Design Standards Guide is a system that reflects the patterns and compenents that should be the foundation of the nVision Application and related products. The goal of these patterns and 
components is to provide unity and consistency of the interface design across the entire atmosphere of the nVision product line.


## Design Principles to follow:

__Clarity__

Reduce Ambiguity. Make the elements of the UI clear, easy to understand, and easy to take actions (with confidence in their decisions)

__Effiency__

The user interface should be optimized to include a streamlined and clear path workflow. Be *Proactive* instead of reactive as much as possible to handle the needs of users better and faster.

__Consistency__

The interface should be familiar to user no matter what device they use to interact with it. The interface must harbor intution and familiarity by applying the same solution to the same problem.

__Beauty__

The interface must be be well crafted and as elegant as possible.This is to prove to users that the device is worth their time and is credible. Aesthetics are not just making things pretty its what sets the tone of the communication between humans and interface.

__Motion__

Motion must be added to the interface to provide a sense of realism and tangibility to the interactions. Animation must describe the spatial relationship, functionality, and intent of elements of the interface

__Accessibility__
As a design principle we should aim to reach every user that we possibly can with our application. By providing contraols that accomodate users with visibility issues such as color blindness and low vision we aim to follow a crucial


# Design UI Standards

## Colors

### Usage

__Visual Definition of Color__

Colors have inherent meaning for most users, albeit sometimes those colors are culturally defined. For example, in the North American world the color red is often used communicate an error in a computer system.

[provide example of color usage in North America and Asia]


__Visual Differentiation Between Color__

nVision uses colors in conjuunction with iconography to visual cue users into what type of content they are interacting with. Its vitally important that we don't always use color solely to provide these visual cues. Not only is this an Accessibility issue it can sometimes reduce the definition that the color is trying to convey about an interaction.

[provide example visual using  nVision App colors]

__Visual Hierarchy for Contrast__

Color should be used to draw attention to the important elements that we want the user to take action on. Its a good idea to make sure that the colors used pop and contrast compared to the backdrop elements it is used upon.

[provide example visual using nVision App dashboard]

__Accessibility__
In the realm of color we need to provide contrast according to the [WCAG guidlines](https://www.w3.org/TR/WCAG20/). We do this to provide practical interaction to users with colorblindness and those with low vision issues on the application.

### BlueScope Color Pallette

nVision takes its color pallette from its founding company BlueScope. The colors follow cool pattern of blues with a pairing of cool gray tones for neutral contrast. These colors have been designed to work harmoniously together. They follow a pattern in order to work in the most effective manner.


### Primary Colors

When using primary colors in your pallette this color should be the most used color across the screens on primary actions buttons and components.

__$bluescope-blue:__
<div style="background:#056DB6; width: 50px; height: 50px; border: 1px solid #282a2a;"></div>

__$bluescope-bright:__
<div style="background:#55C9F4; width: 50px; height: 50px; border: 1px solid #282a2a;"></div>

__$steel-grey:__
<div style="background:#5C87a1; width: 50px; height: 50px; border: 1px solid #282a2a;"></div>

__$deep-ocean:__
<div style="background:#073246; width: 50px; height: 50px; border: 1px solid #282a2a;"></div>


### Accent Colors
These colors are also used to denote primary actions and points of attention. The difference being these colors are more often used to provide greater contrast. 


__$zincalume:__
<div style="background:#449C2D; width: 50px; height: 50px; border: 1px solid #282a2a;"></div>

__$goldenrod:__
<div style="background:#EFB91B; width: 50px; height: 50px; border: 1px solid #282a2a;"></div>

__$colorbond-red:__
<div style="background:#E04619; width: 50px; height: 50px; border: 1px solid #282a2a;"></div>

### Neutrals

__$white:__
<div style="display:inline-block; background:#ffffff; width: 50px; height: 50px; border: 1px solid #ededed; "></div> 

__$black:__
<div style="display:inline-block; background:#000000; width: 50px; height: 50px;"></div>


__$surfmist:__
<div style="background:#EEEEED; width: 50px; height: 50px; border: 1px solid #282A2A; "></div> 

__$surfmist-mid:__
<div style="background:#e5e5e4; width: 50px; height: 50px; border: 1px solid #282A2A; "></div> 

__$surfgray:__
<div style="background:#BFBfBF; width: 50px; height: 50px; border: 1px solid #282A2A; "></div> 

__$monument:__
<div style="background:#363939; width: 50px; height: 50px; border: 1px solid #282a2a;"></div> 

__$monument-dark:__
<div style="background:#242626; width: 50px; height: 50px; border: 1px solid #282a2a;"></div>

__$monument-black:__
<div style="background:#181818; width: 50px; height: 50px; border: 1px solid #282a2a;"></div>


### BlueScope Sister Colors

To add greater depth to the application, some colors were expanded to include sister colors. These colors are within the same color family but have lower levels of brightness.

[Include Example here]

__Opacity Rules__

In specific cases opacity may be used to define different states for an element or component.

_Buttons_

[Include example here]

_Text_

[Include example here]

## Data Input

nVision users will need to add, change, delete information quite often. In order to make this process efficient and universal across the application we provided a list of standards to use on text/numerical entry for this application.


__Simple text Input__

_This is the base level of data entry, usually it is single lines of text but can also be multiple lines of text._


For situations where a user need to enter limited amount of text use a single line input field.


<form>
  <div>
    <input style=" width: 100%; border-radius: 4px; border: 1px solid #EEEEED; padding: 5px 8px;" type="text" placeholder="single line input example">
  </div>
</form>

