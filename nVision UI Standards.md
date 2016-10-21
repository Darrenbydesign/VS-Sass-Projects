# Table of contents
[TOC]

# nVision UI Design Guidelines

## Overview

The Bluescope Design Standards Guide is a system that reflects the patterns and compenents that should be the foundation of the nVision Application and related products. The goal of these patterns and components is to provide unity and consistency of the interface design across the entire atmosphere of the nVision product line.


## Design Principles to follow:

[Examples needed here]

__Clarity__

Reduce Ambiguity. Make the elements of the UI clear, easy to understand, and easy to take actions (with confidence in their decisions)

__Effiency__

The user interface should be optimized to include a streamlined and clear path workflow. Be *Proactive* instead of reactive as much as possible to handle the needs of users better and faster.

__Consistency__

The interface should be familiar to user no matter what device they use to interact with it. The interface must harbor intution and familiarity by applying the same solution to the same problem.

__Aesthetics__

The interface must be be well crafted and as elegant as possible.This is to prove to users that the device is worth their time and is credible. Aesthetics are not just making things pretty its what sets the tone of the communication between humans and interface. Our aesthetic in this application follows themes of Architectural plans  with hard lines and stark contrast but it includes softer tones and some roundness to keep the application from being off-putting.

__Motion__

Motion must be added to the interface to provide a sense of realism and tangibility to the interactions. Animation must describe the spatial relationship, functionality, and intent of elements of the interface

__Accessibility__
As a design principle we should aim to reach every user that we possibly can with our application. By providing contraols that accomodate users with visibility issues such as color blindness and low vision.


## Design UI Standards

## Tyopography

__Arial__

[Arial typeface example here]

[Arial typeface families examples here]

__Type Sizes__

[provide example of type sizes here]


## Colors

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

<ul style="display: flex; list-style: none;">  
<li style="padding: 10px 15px;">
  <strong>$bluescope-blue:</strong>
  <div style="background:#056DB6; width: 50px; height: 50px; border: 1px solid #282a2a;"></div>
</li>

<li style="padding: 10px 15px;">
<strong>$bluescope-bright:</strong>
  <div style="background:#55C9F4; width: 50px; height: 50px; border: 1px solid #282a2a;"></div>
</li>
<li style="padding: 10px 15px;">
<strong>$steel-grey:</strong>
  <div style="background:#5C87a1; width: 50px; height: 50px; border: 1px solid #282a2a;"></div>
</li>

<li style="padding: 10px 15px;">
<strong>$deep-ocean:</strong>
  <div style="background:#073246; width: 50px; height: 50px; border: 1px solid #282a2a;"></div>
</li>
</ul>


### Accent Colors

These colors are also used to denote primary actions and points of attention. The difference being these colors are more often used to provide greater contrast. 

<ul style="display: flex; list-style: none;">
<li style="padding: 10px 15px;">  
<strong>$zincalume:</strong>
<div style="background:#449C2D; width: 50px; height: 50px; border: 1px solid #282a2a;"></div>
</li>

<li style="padding: 10px 15px;">  
<strong>$goldenrod:</strong>
<div style="background:#EFB91B; width: 50px; height: 50px; border: 1px solid #282a2a;"></div>
</li>

<li style="padding: 10px 15px;">  
<strong>$colorbond-red:</strong>
<div style="background:#E04619; width: 50px; height: 50px; border: 1px solid #282a2a;"></div>
</li>
</ul>

### Neutrals

<ul style="display: flex; list-style: none;">
    <li style="padding:10px 15px;">
        <strong>$white:</strong>
        <div style="background:#ffffff; width: 50px; height: 50px; border: 1px solid #ededed; "></div>
    </li>
    <li style="padding:10px 15px;">
        <strong>$black:</strong>
        <div style="background:#000000; width: 50px; height: 50px;"></div>
    </li>
    <li style="padding:10px 15px;">
        <strong>$surfmist:</strong>
        <div style="background:#EEEEED; width: 50px; height: 50px; border: 1px solid #282A2A; "></div>
    </li>
    <li style="padding:10px 15px;">
        <strong>$surfmist-mid:</strong>
        <div style="background:#e5e5e4; width: 50px; height: 50px; border: 1px solid #282A2A; "></div>
    </li>
</ul>

<ul style="display: flex; list-style: none;">
  <li style="padding:10px 15px;">
        <strong>$surfgray:</strong>
        <div style="background:#BFBfBF; width: 50px; height: 50px; border: 1px solid #282A2A; "></div>
    </li>
    <li style="padding:10px 15px;">
        <strong>$monument:</strong>
        <div style="background:#363939; width: 50px; height: 50px; border: 1px solid #282a2a;"></div>
    </li>
    <li style="padding:10px 15px;">
        <strong>$monument-dark:</strong>
        <div style="background:#242626; width: 50px; height: 50px; border: 1px solid #282a2a;"></div>
    </li>
    <li style="padding:10px 15px;">
        <strong>$monument-black:</strong>
        <div style="background:#181818; width: 50px; height: 50px; border: 1px solid #282a2a;"></div>
    </li>
</ul>

### BlueScope Sister Colors

To add greater depth to the application, some colors were expanded to include sister colors. These colors are within the same color family but have lower levels of brightness.

[Include Example here]

__Opacity Rules__

In specific cases opacity may be used to define different states for an element or component.

_Button colors_

[Include example here]

_Text_

[Include example here]

## Data Inputs

nVision users will need to add, change, delete information quite often. In order to make this process efficient and universal across the application we provided a list of standards to use on text/numerical entry for this application.


#### Simple text Input

_This is the base level of data entry, usually it is single lines of text but can also be multiple lines of text._

For situations where a user need to enter limited amount of text use a single line input field.

__Labeling__

Input fields should have labels should be listed above the field or to the left of the field. In most contexts the label will be listed to provide better readability and clarity to users. 

Horizontal labeling on the left side of the input should be used when screen real-estate is critical issue and there are only a small amound of fields. We try to make use of this when there is fewer than 5 fields.

[provide example of horizontal and vertical inputs with labels]

__Context__

Inputs that contain related data should be grouped together. Simple examples of this would be address fields and login information. Complex examples would be dimension calculations in our dialog panes of the Model Configurator.

<form style="padding: 10px 15px;">
  <div style="padding: 10px 15x; margin-bottom: 20px;>
    <label style="font-weight: bold;">Input Field
    <input style="width: 100%; border-radius: 4px; border: 1px solid #EEEEED; padding: 5px 8px;" type="text" placeholder="single line input example">
    </label>
  </div>
  
  <div style="display: inline-flex; padding: 10px 15x; margin-bottom: 20px;">
    <label style="font-weight: bold;"> First Name
    <input style="width: 100%; border-radius: 4px; border: 1px solid #EEEEED; padding: 5px 8px;" type="text" placeholder="single line input example">
    </label>
    </div>
    <div style="display: inline-flex; padding: 10px 15x; margin-bottom: 20px;">
    <label style="font-weight: bold;"> Last Name
      <input style="width: 100%; border-radius: 4px; border: 1px solid #EEEEED; padding: 5px 8px;" type="text" placeholder="single line input example">
    </label>
    </div>
    <div style="padding: 10px 15x; margin-bottom: 20px;">
    <label style="font-weight: bold"> Email
      <input style="width: 100%; border-radius: 4px; border: 1px solid #EEEEED; padding: 5px 8px;" type="text" placeholder="single line input example">
    </label>
  </div>
</form>



__Sizing__

Inputs width should be 100% of their container and input labels should respond to its corresponding label.

>For ease of accesibility the `<label>` element should wrap around the `input` markup.

[Example of markup goes here]

#### Input Validation/Errors

Errors and validation are useful in data entry because it provides users with feedback on inputs that are not recognized by the application.

Errors should occur when the nVision application is unable to complete the expected action.

Validations should occur when a users input is not understood.

In order to mitigate errors in our application and hold to our strive for accessibility we should make it easier for users to input information in as flexible a way as possible. 

The nVision app should accept common data formats (e.g. number, email, date-time, etc.) and provide proper context through affordances to help users avoid these errors

In the event of validation errors our application should employ the following: 

+ Clear, concise communication of the problem
+ Describe how a user can solve the issue that occurred
+ Prevent as much user input as possible. Where the system can include common entries such as units of measurement or numerical parsers like decimals `.` or architectural marks `'` or `


#### Input help

Input or other form elements that are particularly unique should be provided with some information to help the user understand the best way to provide good data or inform the users about the best choice(s) to make.

For brief information about an input use helper text under the input field or next to the input according to layout (horizontal or vertical layout).

[example of input with helptext here]

For even more brief information provide users with examples of the valid input using placeholder text in the input fields

[Example of input with placeholder text here]

#### Complex Input fields

These inputs are inputs that provide users adssistance in specific types of data entry that requires more than manual  textual/ numerical input.

#### Date Pickers/Calendars

[Provide example of datepicker here]

Instead of forcing users to provide a manual entry for a date provide a visual way for our users to select a date or range of dates

#### Search/Find/Lookup input

[provide and example of a search input here]

Search is a very useful tool to provide to users who want to find items quickly. I the nVision application search is useful in both the dashboard and the Model configurator views. The search should limit the items that a user has to sift through to either a small group or a single item.

Search should update results in real-time as much as possible in nVision.
Users should be able to type in a phrase and see the list they are searching through update when items matche their input. 

[Show an example here of  search functionality with library list]


#### Checkboxes

[Provide examples of Checkboxes here]

Checkboxes should be used in the application when a user needs to make a choice or multiple choices. These choices should only be options that can true or false. 

For example, if a user needs to turn a grid on or off a checkbox is sufficient.

Likewwise If a user needs to select the types of areas affected during an  Applied load onr a surface checkboxes allow users to make a selection one or more of those options.

#### Radio Buttons

[Provide example of radio buttons here]

Radio buttons are designed to allow a user to select one option from list of options. Its best to use radio buttons when you have less than 10 items to choose from, anymore than this and spacing can become an issue and users may not be able to compare items together. 


#### Dropdowns

[provide example of dropdown menu here]

The dropdown menu allows users to select one or sometimes multiple options from a list. They are similar in functionality to checkboxes or radio buttons in this way. The difference being that dropdowns are used for greater amounts of options a user can choose from. They do provide less transparency for users to compare options and thus should be used when there are 5 or greater options to choose.

#### Inline Edit

[provide an example of inline edit input here]

Inline editing is a powerful tool that allows users to edit a record without switching between viewing and editing an input.  This method follows our principle of efficieny and should be used wherever possible.

Fields that allow inline editing should be paired with the edit pencil icon in a tooltip on hover state. The inline edit action should start when the user clicks on the edit text or pencil icon in the tooltip.

[provide example of inline edit input here]


__Progressive enhancement__

Progressive enhancement is a tern in web design that describes an emphasis on accesibility, semantic markup (HTML) and the use of external stylesheets and scripting files.

Progressive enhancement is a focus on accessibility and efficiency for our user base while also containing a fallback for older browsers where necessary.

Below are some of the cases where we try to offer progressive enhancements where possible.

#### Decimal Inputs

values that contain decimal values should provide parsing for the user input.

>Example if a user enters the value in a `123456` in a field that requires an input format of `xxxx.xxxx`

[provide decimal input example here]

#### Architectural Inputs

nVision is an application that largely deals with mesaurements in the empirical system. To provide a better enhancement to our user base nVision uses progressive enhancement to append the appropriate `'` or `"` marks to values entered in architectural input field.

> Exmaple if a user enters the values `5 8` in the architectural field the  the value will be displayed as `5' 8"` when the user leaves the field . 
  This should also occur when presses the <kbd>Enter</kbd> key on the keyboard while in focused the input field.

[provide architectural input example here]

## Data Presentation

When displaying data for a user the items should be easy to differentiate from each other. Often these items are made in the form of lists or multiple lists paired together. The most important thing is that the data  points are clearly labeled for scanability. For example data points that relate to units of measurement should have the measurement unit provided with the data point.

**Its a good idea to follow these principles when displaying data points:**

+ Provide a visible affordance such an icon, link or a button for interactive portions of list.
+ Title each list of data points and use labels where possible. Its a very jarring experience when data points are provided without context.
+ Provide users with an empty state screen when there are no data points to display. If a list is empty tell the user why this follows our principle of clarity. For example, a message in a search view would say "No results found, Please try and refine your search."

#### Data Tables


[provide example of tables here]


#### Tree Grid

[provide example of Model Structure here]


#### Tiles

[provide example of tile card from pricing here]

#### Timeline/ Activity Feed

[provide exmaple of Versioning timeline here]


## Layouts

Layouts are structured templates that provide consistency for common actions/patterns in the application.

**Layouts guidelines to follow when creating/selecing layouts:** 

+ **Content drives layout** - Understand how the information wil be used before choosing a layout design.
+ **Priorities First** - Organize the content to display the most important information first 
+ **Group like items together** - Make it efficient for users to sift through the content.


#### Dashboard Layouts

#### Workspace Layouts

[provide example of workspace layout here]

#### List Layouts

[provide example of List layout here]

#### Grid Layouts

[provide example of grid layout here]

## Data Loading and Processing

Loading indicators are helpful to user because they provide communcation that the application is actively working to retrieve data for them. There are a variety of ways we present this data to our users in the nVision application.


#### Spinners

Spinners are animated SVGs or GIFs that provide feedback on an otherwise blank screen when the system is loading or working to retrieve data. Contraty to their name they don't always have to spin they can animate in lots of creative ways. Use spinners when a component on a page is making an udpate asynchronously without refreshing the entire page.


Spinners should generally be centerd vertically _AND_ horizontally within its container. In order to provide contrast against any possible backdrop provide a light or dark overlay behind the spinner.

Spinners should not be placed directly over text or other visual elements on screen without this overlay.

[provide an example of loading animation here]

Sometimes spinners need more context added to them to indicate the type of action that is taking a while. for that we append text labels such as "Loading " or "Retrieving|Sorting  Models/Projects"

[Provide an example of list loading]

[provide an example of full screen loading animation]

[provide Modal loading animation]

[ provide an example of continuous scrolling loading here]


#### Blueprints

In the event that a page needs to be loaded/ re-loaded at once we recommend use a placeholder loading content to visually communicate that content is in the process of loading. We call this blueprint loading.

[Provide Blueprint loading example here]

Blueprint loading should not be used for asynchronous updates in the application. Blueprints are a more visually appleaing way to show that everything on a page needs to load. Showing our spinner animation in multiple compnonents on a page or raw code variables would not be very a good experience to users and violates our principle of aesthetics.

Blueprints are to be used when data will take longer than roughly 300ms to retrieve. If the data takes less than 300ms its best to just show the data. If it takes more 300ms then the data should transition in smoothly and fade-in as the blueprint fades out.

If a component doesn't display until it already contains data then a blueprint is not needed just display the data.

__Blueprints aesthetic__

[provide an example of Blueprint placeholder content here]

**Blueprint design should be the following:**

+ Lightweight and simple. use simple shapes to convey the content/data included in a component. This excludes actionable UI elements like buttons and links.
+ Keep the shape heights consistent to keep a nice and easy to view aesthetic
+ They should be responsive and stretch/shrink t fit their containers.
+ When loading blueprints they should follow the pattern of Top left to bottom right.


[provide an example of Blueprint placeholder for lists]

[provide an example of Blueprint placeholder for model/project here]


## Notifications

Notifications are nVision applications direct response to user conveying the result of their actions or a system action on their behalf.

#### Icons

Icons are used with notification components to provide greater accessibility and context to a user. When deciding how to use the icons please refer to the list below.

| Icon | When to Use Them |
| -----| ---------------- |
| Success | Actions were completed successfully |
| Warning | Something may occur that user might not intend |
| Error | Something went wrong. Something isn't allowed to occur. |
| Info | Additional information is available to give more context. |

[provide image of the icons in this table]

#### Alerts

Alerts are a way to communicate important high-level information. In the Model configurator alerts should provide real-time updates about user actions like incorrect placement of a object on a shape. In the project dashboard alerts should let users know when they have created, updated, or deleted data.

In the Model Configurator alerts should appear at the bottom of the screen.

[Example of alerts shown in Model Configurator here]

In the dashboard the Alerts shold appear at the top of screen.

__ Alert Types__

**Alerts can appear in 3 unique states:**

+ **Persistent** - these alerts remain visible until the user dismisses it with the ` [X] `, or close icon. Time duration doesn't apply to these alert types.
+ **Dismissable** - these remain visible until the user has either dismissed it with the `[X]` or the time duration has been completed.
+ **Wispy** - This will remain visible until the time duration has been completed.  there is no `[X]` icon on this alert type and the user cannot dismiss it early. This is done to force the user to see this alert for the full time period.

__Sizing__

Alerts should have a minimum width of 60% of their container (see alerts in components section for more details). Alert text should wrap to as many lines as necessary without truncation

__Alert Stacking__

When more than one alert appears at the same timoe stack them so that the most recent alert is placed on top and the rest appear in chronological order.

__Alert Batching__ 

Alert stacking can become quite busy. To minimize the amount of alerts that appear stacked nVision utilizes a Batching of alerts of the same type.

[Provide example of batched alerts of the same type here]

> ProTip: Sucesss message Alerts should not be used when an action would bring the user into a newly created item or when the action would present the user with their new change immediatedly.

#### Confirmation Dialogs

[provide an example of a confirmation dialog here]

A confirmation dialog is a notification that requires user action in order to move forward.

> ProTip: Confirmation dialogs are meant to stop the user from completing other parallel actions in the application. This way we force the user to take action on this before doing anything else.

Confirmation dialogs provide the user with one or more options to confirm or deny their choices for the action that prompted the dialog. 

**Confirmation dialogs should be used when one of the following things occur:**

+ When changes are not saved in real-time
+ When there is no ability to retain changes when switching between actions
+ When performing batch operations that would require a reset of items in the workspace. This is particularly common in the Model Configurator


Confirmation dialogs require one of three actions to take place:

+ A user must click the `cancel` button in the dialog. This action will cancel any changes that were tied to the confirmation dialog. 
+ A user must click the `Continue` button in the dialog. This action will confirm any changes that were tied to the confirmation dialog.
+ A user must click the `X` icon to close the dialog. This action has the same effect as the cancel option.

[Provide examples of confirmation dialogs in Model Configurator]

#### Tooltips

Tooltips are text labels that provide feedback when the user hovers over, focuses on, or touches an element in the application.

They should contain brief helptext about the function of the element its paired with.

Tooltips should be used for interactive icons and buttons with iconography and imagery in the application

[Provide an example of tooltip with icons]

[Provide an example of tooltip with button]

[Provide an example of tooltip with imagery]

Tooltips don't have directional arrows they are presented based on motion towards the source object

[example of tooltip appearing in relation to mouse direction] 

## Navigation

Nvaigation patterns are what help users move between screens and find what they need in the application to accomplish their goals.

There are several techniques that nVision uses to  guide users throught the application:

#### Tabs

#### Nested tabs

#### Cross-section tabs

#### Trees List

#### Breadcrumbs

#### Filter bar

#### Off-Canvas Navigation


