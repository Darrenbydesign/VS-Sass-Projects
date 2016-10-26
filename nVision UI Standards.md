# Table of contents
[TOC]

# nVision UI Design Guidelines

## Overview

The BlueScope Design Standards Guide is a system that reflects the patterns and components that should be the foundation of the nVision Application and related products. The goal of these patterns and components is to provide unity and consistency of the interface design across the entire atmosphere of the nVision product line.


## Design Principles to follow:

[Examples of Visuals needed here]

__Clarity__

Reduce Ambiguity. Make the elements of the UI clear, easy to understand, and easy to take actions (with confidence in their decisions)

__Efficiency__

The user interface should be optimized to include a streamlined and clear path work-flow. Be *Proactive* instead of reactive as much as possible to handle the needs of users better and faster.

__Consistency__

The interface should be familiar to user no matter what device they use to interact with it. The interface must harbor intuition and familiarity by applying the same solution to the same problem.

__Aesthetics__

The interface must be be well crafted and as elegant as possible.This is to prove to users that the device is worth their time and is credible. Aesthetics are not just making things pretty its what sets the tone of the communication between humans and interface. Our aesthetic in this application follows themes of Architectural plans  with hard lines and stark contrast but it includes softer tones and some roundness to keep the application from being off-putting.

__Motion__

Motion must be added to the interface to provide a sense of realism and tangibility to the interactions. Animation must describe the spatial relationship, functionality, and intent of elements of the interface

__Accessibility__
As a design principle we should aim to reach every user that we possibly can with our application. By providing controls that accommodate users with visibility issues such as color blindness and low vision.

# nVision UI Styling

## Colors

__Visual Definition of Color__

Colors have inherent meaning for most users, albeit sometimes those colors are culturally defined. 

> Example 
In the North American world the color red is often used communicate an error in a computer system.

[provide example of color usage in North America and Asia]


__Visual Differentiation Between Color__

nVision uses colors in conjunction with iconography to visual cue users into what type of content they are interacting with. Its vitally important that we don't always use color solely to provide these visual cues. Not only is this an Accessibility issue it can sometimes reduce the definition that the color is trying to convey about an interaction.

[provide example visual using  nVision App colors]

__Visual Hierarchy for Contrast__

Color should be used to draw attention to the important elements that we want the user to take action on. Its a good idea to make sure that the colors used pop and contrast compared to the backdrop elements it is used upon.

[provide example visual using nVision App dashboard]

__Accessibility__
In the realm of color we need to provide contrast according to the [WCAG guidlines](https://www.w3.org/TR/WCAG20/). We do this to provide practical interaction to users with colorblindness and those with low vision issues on the application.

#### BlueScope Color Pallette

nVision takes its color palette from its founding company BlueScope. The colors follow cool pattern of blues with a pairing of cool gray tones for neutral contrast. These colors have been designed to work harmoniously together. They follow a pattern in order to work in the most effective manner.

#### Primary Colors

When using primary colors in your palette this color should be the most used color across the screens on primary actions buttons and components.

<ul style="display: flex; list-style: none; margin: 0; padding: 0;">  
<li style="padding: 10px 15px;">
  <strong>$bluescope-blue</strong>
  <div style="background:#056DB6; margin: 0 auto; width: 100px; height: 100px; border: 1px solid #282a2a;"></div>
  <p>Hex: #056db6</p>
</li>

<li style="padding: 10px 15px;">
<strong>$bluescope-bright</strong>
  <div style="background:#55C9F4; margin: 0 auto; width: 100px; height: 100px; border: 1px solid #282a2a;"></div>
  <p>Hex: #55c9f4</p>
</li>
<li style="padding: 10px 15px;">
<strong>$steel-grey</strong>
  <div style="background:#5C87a1; margin: 0 auto; width: 100px; height: 100px; border: 1px solid #282a2a;"></div>
  <p>Hex: #5c87a1</p>
</li>

<li style="padding: 10px 15px;">
<strong>$deep-ocean</strong>
  <div style="background:#073246; margin: 0 auto; width: 100px; height: 100px; border: 1px solid #282a2a;"></div>
  <p>Hex: #073246</p>
</li>
</ul>

#### Accent Colors

These colors are also used to denote primary actions and points of attention. The difference being these colors are more often used to provide greater contrast. 

<ul style="display: flex; list-style: none; margin: 0; padding: 0;">
<li style="padding: 10px 15px;">  
<strong>$zincalume</strong>
<div style="background:#449C2D; margin: 0 auto; width: 100px; height: 100px; border: 1px solid #282a2a;"></div>
<p>Hex: #449C2D</p>
</li>

<li style="padding: 10px 15px;">  
<strong>$goldenrod</strong>
<div style="background:#EFB91B; margin: 0 auto; width: 100px; height: 100px; border: 1px solid #282a2a;"></div>
<p>Hex: #efb91B</p>
</li>

<li style="padding: 10px 15px;">  
<strong>$colorbond-red</strong>
<div style="background:#E04619; margin: 0 auto; width: 100px; height: 100px; border: 1px solid #282a2a;"></div>
<p>Hex: #e04619</p>
</li>
</ul>

#### Neutrals

<ul style="display: flex; list-style: none; margin: 0; padding: 0;">
    <li style="padding:10px 15px;">
        <strong>$white</strong>
        <div style="background:#ffffff; margin: 0 auto; width: 100px; height: 100px; border: 1px solid #bfbfbf; "></div>
        <p>Hex: #ffffff</p>
    </li>
    <li style="padding:10px 15px;">
        <strong>$black</strong>
        <div style="background:#000000; margin: 0 auto; width: 100px; height: 100px;"></div>
        <p>Hex: #000000</p>
    </li>
    <li style="padding:10px 15px;">
        <strong>$surfmist</strong>
        <div style="background:#EEEEED; margin: 0 auto; width: 100px; height: 100px; border: 1px solid #282A2A; "></div>
        <p>Hex: #eeeeed</p>
    </li>
    <li style="padding:10px 15px;">
        <strong>$surfmist-mid</strong>
        <div style="background:#e5e5e4; margin: 0 auto; width: 100px; height: 100px; border: 1px solid #282A2A; "></div>
        <p>Hex: #e5e5e4</p>
    </li>
</ul>

<ul style="display: flex; list-style: none; margin: 0; padding: 0;">
  <li style="padding:10px 15px;">
        <strong>$surfgray</strong>
        <div style="background:#BFBfBF; margin: 0 auto; width: 100px; height: 100px; border: 1px solid #282A2A; "></div>
        <p>Hex: #bfbfbf</p>
    </li>
    <li style="padding:10px 15px;">
        <strong>$monument</strong>
        <div style="background:#363939; margin: 0 auto; width: 100px; height: 100px; border: 1px solid #282a2a;"></div>
        <p>Hex: #363939</p>
    </li>
    <li style="padding:10px 15px;">
        <strong>$monument-dark</strong>
        <div style="background:#242626; margin: 0 auto; width: 100px; height: 100px; border: 1px solid #282a2a;"></div>
        <p>Hex: #242626</p>
    </li>
    <li style="padding:10px 15px;">
        <strong>$monument-black</strong>
        <div style="background:#181818; margin: 0 auto; width: 100px; height: 100px; border: 1px solid #282a2a;"></div>
        <p>Hex: #181818</p>
    </li>
</ul>

#### BlueScope Sister 

To add greater depth to the application, some colors were expanded to include sister colors. These colors are within the same color family but have lower levels of brightness.

[Include Example here]

__Opacity Rules__

In specific cases opacity may be used to define different states for an element or component.

__Button colors__

[Include example here]

__Text &amp; Background Colors__

[Include example here]

## Imagery

__Principles__

__Best Practices__

__UI Integration__

## Icons

[ provide more details about icons here soon] 

__Sizing__
Icons intended to be used in the Model Configurator are sized at `w: 50px h: 50px`

Icons intended to be used in the Dashboard are sized `w: 25px h: 25px`

__Key-lines__

__Icon Anatomy__

__Geometry__

__Color__

__Tint, Shade, & Lighting__

__System Icons__

__Action Icons__

## Typography

#### Primary Font

nVision uses Arial as its brand typeface. It also utilizes the Bold and Italic weights of this font family to convey different states.

__Arial__

<div style="font-family: Arial; ">
  <p> A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
  <p> a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
  <p> 1 2 3 4 5 6 7 8 9 0 ! @ # $ % ^ & * ( ) - _ = + [ ] { } | \ / : ; " ' < > , . ? /</p>
</div>
__Arial Bold__

<div style="font-family: Arial; font-weight: bold; ">
  <p> A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
  <p> a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
  <p> 1 2 3 4 5 6 7 8 9 0 ! @ # $ % ^ & * ( ) - _ = + [ ] { } | \ / : ; " ' < > , . ? /</p>
</div>

__Arial Italic__

<div style="font-family: Arial; font-style: italic; ">
  <p> A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
  <p> a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
  <p> 1 2 3 4 5 6 7 8 9 0 ! @ # $ % ^ & * ( ) - _ = + [ ] { } | \ / : ; " ' < > , . ? /</p>
</div>



#### Type Sizing 

[provide example of type sizes here]

__Opacity Rules__

## Voice and Tone ##

The nVision text should understandable by anyone, anywhere, regardless of culture or language. Although this is an application used by engineers the terminology should not impede new users and begin-gineers (yeah I know, and I'm not sorry) from understanding how to find their way through it.

Clarity and accuracy of the text while being concise is key to user confidence in an application. The more concise and clear the text in the application the quicker users can learn how to operate within our application.

The voice and tone guidelines of the application should trickle into every element of the application that has text from navigation to buttons.

When writing in this application be sure to be mindful of the following:

+ Tone
+ Capitalization
+ Punctuation
+ Spelling
+ Language

#### Tone

The nVision application should be approachable and respectful to its end user their needs. The text should reflect this through the use of a friendly tone to complimentary our UI designs friendly but architectural aesthetic.

__Use a Respectful Tone__

The text should not make users feel patronized or feel stupid.

__Use an Approachable Tone__

Focus on the benefits of UI interaction in the text instead of overloading the users with intense details about how the action functions.

Avoid using messages that suggest that a user's action was surprising or unusual to the UI. This can cause a lack of confidence in the end user and come across as rude.

__Use positive text__

nVision should present information in a positive way as possible when interacting with the end user. Concise text doesn't have to result in rude or negative speech.

> **Example**
> 
> **Good**
> "Use 30 characters or less for Project names"
> **Bad**
> "Your Project name must be no more than 30 characters."

__Use Necessary text only__

When writing a message to the end user in text form ask this critical question.

"Does the user really need to know this?... Really?"

Its better to let the user stay focused on the task at hand instead of bombarding them with notifications. Provide a good UX always, use words when necessary.

[ Provide example of lengthy description and a concise version of that message]

#### Capitalization &amp; Punctuation

__Use Sentence Style Capitalization__

nVision utilizes sentence style capitalization in its text. This includes titles, Headings, labels, menu items, navigation, tool-bars etc.


__Brand specific names__

For names of products created for nVision or other external products use the market appropriate case. Examples: **Butlerib II**, **Panel Rib**, and **Galvalume** etc.

__Use of punctuation__

In order to help users scan through the text easily avoid using unnecessary punctuation marks.

Periods - Should be omitted if there is only one sentence presented or if the text is used in the following elements:

+ Labels
+ Hover text
+ Bulleted Lists
+ Dialog body text

Periods should be used in the following instances:

+ All text where there are multiple sentences (this includes bulleted lists)
+ Sentences followed by a link. (the period should appear before the link)
+ Dialogs with multiple sentences

Colons  - should be omitted when dealing with labels. Normal grammar rules for colons apply for other situation where a colon is needed.

> Example:
>
>  **Good**
>  <label for="">First Name</label>
>
>  **Bad**
>  <label for="">First Name: </label>

__Use Contractions__

Contractions are shorter and sometimes more concise than their full name counterparts. However, where necessary don't be afraid to use `Do not` where it might provide more clarity.


__Avoid Exclamation__

When using exclamations users can often interpret this as shouting so it is best to consider the full context of the statement before deciding to use `!` 

> Example:
  **Good**
  "Welcome!"
  "Success"
  **Bad**
  "Learn more about Bracing Features!"

__Use Numerals instead of words__

When dealing numerical text users can parse the number form quicker then its textual counterpart. Its best to use the number form as often as possible.

> Example: 
>
> **Good**
> "You have 14 notifications"
>
> **Bad**
> "You have fourteen notifications"


  > **ProTip:** When dealing with a mixture of context with numbers its OK to use the number form and the text format to provide more clarity to users.
  > Example: "Enter two 8s in this field"

##### Punctuation List

|       | Glyph/ Character| Description/ usage|
|-------|----------------:|-------------------|
|Periods| .| Don't use these for fragment and single sentences. Use this for full sentences in body text.|
| Commas | ,| Use a comma when listing out things such as "this, that, and the other thing."
| Exclamation points| ! | Avoid these for things that should not sound like shouting or excitement from the UI. If you wouldn't shot it in person the app shouldn't either|
| Colons| &#58; `&#58;` `\u003A`| Don't add these to labels in forms or dialogs|
| Quotation Marks | &ldquo;  &rdquo;  or  &lsquo;  &rsquo; `&ldquo;` `&rdquo;` or `&lsquo;` `&rsquo;` `\u201c` `\u2018` or `\u201D` `\u2019`| When quoting this in text use the **Real** quote marks not the inch and foot symbols. Right single quotes are used for apostrophes as well. Primes and generic quote marks are used by the application for measurement and should not be used for text.|
| Primes | &prime; `&prime;` or `\u2032`  `&Prime;` or `\u2033` | The prime or `'` mark is used for feet in nVision. The double prime or `"` is used for inches|
| Ellipses| &hellip; or &vellip; `&hellip;` or `&vellip;`| Use the ellipsis to indicate an action is in progress or to indcate a truncated statement. Don't use these in buttons or dialogs menu items that start another process to avoid a lack of clarity to the action.|
| Em Dash| &mdash; `&mdash;` \u2014| These should not be used in nVision|
| En Dash| &ndash; `&ndash;` \u2013 | En dashes are used instead of a hyphen to represent a range (in English language). If a dash is needed to separate lines of text like &ndash; this use an `en dash`. Example Meeting: 8:30 AM &ndash; 12:00 PM|
| Hyphens | - | Hyphens are used for negative numbers. like -10, -$200, etc. Hyphens are also used for joined words like anti-inflammatory or work-space to avoid ambiguity of text|
| Parenthesis | ( ) | parenthesis are used to define acronyms or jargon that users may not know for various reasons. Example "Please update the SDD (Shape dimensions dialog) before continuing."

#### Language

Addressing the user in this application should be as if having a conversation with them.

__Second Person Usage__
Use the second person when writing for this application in most cases. Use terms like "You" or "Your" instead of vague or impersonal statements.

__First Person Usage__
Occasionally we will need to shift into First person usage for message in the nVision application. Using "I" or "My" should occur when the user needs to emphasize some form of ownership to an interaction or content within the nVision application.

> **ProTip:** Avoid mixing first person and second person in statements to the user. Don't combine "me/my" with "you/your" because it confusing and this breaks our principle of clarity in the application.
 
Use the term we sparingly. nVision should focus on the end user when speaking and seldom mention its self in the active sense. The exception to this rule is when a real human is actually taking action on behalf of the end user.

> Example:
  **Good**
  "We will review your change order and will call within a few hours for more details."
  **Bad**
  "Your change order will be reviewed and you will receive a response within a few hours."

__Use present Tense__

Text in nVision should written in the present tense to describe action and interactions. Avoid the use of future tense to explain interactions in the project because this can cause a potential lack of clarity.

When future tense or past tense wording needs to be used remember to be concise and use simple verbs forms.

__Use concise wording__

The definition of concise is to a great deal of information in a few words.
This means to be brief while retaining comprehensibility. 

Users of the web tend to read small, scan-able bits of text better than long sentences. The nVision should utilize concise text in order to help our end users navigate the application.

__Use simple wording__

Simple language is often the most direct and easiest language for users to understand across a broader spectrum.

> Example:
  **Good**
  "Save Changes?"
  **Bad**
  "Do you want to save your changes?"

> Example:
  **Good**
  "Overwrite existing frames on this shape?"
  **Bad**
  "If you continue, your existing frames will be deleted from your shape."

Avoid industry specific terminology or custom name for UI features in nVision.
This reduces clarity for new users and makes it harder to provide accessibility to users. Text should be readable by both advanced and beginners of English.

[Provide example of industry specific text and a counter example to use here]

#### Localization

[This still needs to be determined not in this phase or milestone]

# nVision UI Patterns

## Data Entry 

nVision users will need to add, change, delete information quite often. In order to make this process efficient and universal across the application we provided a list of standards to use on text/numerical entry for this application. We utilize _HTML5_ and [Progressive Enhancement](https://en.wikipedia.org/wiki/Progressive_enhancement) in our data input fields.

Its important to remember that we are designing this application for a user's need not for a specific form factor or input which means we should strive to provide them accessibility in various methods of entry.

By building this application accessibly we increased the likelihood of support for future unknown methods of inputs.

__Labeling__

Input fields should have labels should be listed above the field or to the left of the field. In most contexts the label will be listed to provide better readability and clarity to users. 

Horizontal labeling on the left side of the input should be used when screen height real-estate is critical issue and there are only a small amount of fields. 

> ** ProTip:** 
> When there are fewer than 5 fields in a form use the horizontal labeling pattern if you need a more condensed layout.

[provide example of horizontal and vertical inputs with labels]

__Context__

Inputs that contain related data should be grouped together. Simple examples of this would be address fields and login information. Complex examples would be dimension calculations in our dialog panes of the Model Configurator.

[Provide example of different input orientations here]

__Sizing__

Inputs width should be 100% of their container and input labels should respond to its corresponding label.

>For ease of accessibility the `<label>` element should wrap around the `input` markup. This allows users to select either the label or click inside of the input to begin acting on the input field.
  > Also be sure to provide the `id=` and `for=` tags to the inputs for screen reader accessibility

``` html
<label for="shape_width">Width
    <input id="shape_width" name="shape_width">
</label>

```

__Data Format__

Different types of data are represented in the nVision application using different formats.

Here are the following data formats that are represented:

+ Architectural measurement
+ Decimal Measurement
+ Rounded Numbers
+ Date & Time
+ Text

#### Simple Text Input

_This is the base level of data entry, usually it is single lines of text but can also be multiple lines of text._

For situations where a user needs to enter limited amount of text use a single line input field.

For situations where multiple lines of text are needed use a textarea input field.


#### Textarea

[Textarea example goes here]

A textarea field is a multi-line text field that allows users to enter multiple lines of text.

```
<label for="description">Description</label>
<textarea name="description" id="description" placeholder="enter text here..." />
```
#### Checkboxes

[Provide examples of Checkboxes here]

Checkboxes should be used in the application when a user needs to make a choice or multiple choices. These choices should only be options that can true or false.

> Example, if a user needs to turn a grid on or off a checkbox is sufficient.

Likewise If a user needs to select the types of areas affected during an  Applied load on a surface checkboxes allow users to make a selection of one or more of those options.

__ Input Inheritance__

Sometime a user selection selections can populate other values in other related inputs. This pattern allows users to shortcut entry of information such as an address form or contact information. This is handled with the use of a trigger input often in the form of a `checkbox`

When providing inheritance its important to provide users with the ability to override the inherited fields. If users overwrite an inherited input field with a new value its important to switch the trigger input back to its inactive state if the user has not already done so.

> **Example** 
>
> If a user selects a checkbox for "same as shipping address" the inputs below 
> the checkbox will appear populated with the shipping address values from another section of the form. Once a user changes any of the form values the trigger input will reset to its inactive state.
> If users wish to re-apply the inheritance to their inputs they can simply set the trigger input to its active state.

  [Provide example of checkbox trigger inactivated after custom update]

  [Provide example of checkbox trigger in active after custom update]

#### Radio Buttons

[Provide example of radio buttons here]

Radio buttons are designed to allow a user to select one option from list of options.

Its best to use radio buttons when you have less than 10 items to choose from, anymore than this and spacing can become an issue and users may not be able to compare items together. 

[Provide a good and Bad example here]

#### Dropdowns

[provide example of dropdown menu here]

The dropdown menu allows users to select one or sometimes multiple options from a list. They are similar in functionality to checkboxes or radio buttons in this way. The difference being that dropdowns are used for greater amounts of options a user can choose from. 

Dropdowns provide less transparency for users to compare options and thus should be used when there are 5 or greater options to choose from.

[Provide Good and Bad Example here]

#### Validation/Errors

Errors and validation are useful in data entry because it provides users with feedback on inputs that are not recognized by the application.

Errors should occur when the nVision application is unable to complete the expected action.

Validations should occur when a users input is not understood.

In order to mitigate errors in our application and hold to our strive for accessibility we should make it easier for users to input information in as flexible a way as possible. 

> **ProTip:** The nVision app should accept common data formats (e.g. number, email, date-time, etc.) and provide proper context through affordances to help users avoid these errors.

**In the event of validation errors our application should employ the following:**

+ Clear, concise communication of the problem
+ Describe how a user can solve the issue that occurred
+ Prevent as much user input as possible. Where the system can include common entries such as units of measurement or numerical parsers like decimals `.` or architectural marks `'` or `"`

[Provide example of validation error here]

If there are validation errors on an input, the application should help the user resolve the issue as soon as possible. The confirm action button should become disabled until issues are resolved. For inputs that occur in real-time with no confirmation of the action.

__Error/Validation Text__

Error text should only be shown after the interaction with the field. When the user leaves the field the validation should appear before the user clicks on the confirm action button.

Some instances will require the in-line validation to occur 

[provide example of error text on an input]

When using in-line validation the field that contains an error should be highlighted using our error state color for nVision (See [Colors](#colors) section for details on color states).

The error text should have contrast with its background. The text should be legible and readable.

[Provide example of error text on light background]

[Provide example of error text on dark background]

#### Input Help

Input or other form elements that are particularly unique should be provided with some information to help the user understand the best way to provide good data or inform the users about the best choice(s) to make.

For brief information about an input use helper text under the input field or next to the input according to layout (horizontal or vertical layout).

This can also be accomplished through the use of a tooltip on icon. See [Tooltips](#tooltips)

[Example of input with help text here]

For even more brief information provide users with examples of the valid input using placeholder text in the input fields

[Example of input with placeholder text here]

### Complex Input fields

These inputs are inputs that provide users assistance in specific types of data entry that requires more than simple text or numerical entries.

#### Date Pickers/Calendars

[Provide example of date-picker here]

Instead of forcing users to provide a manual entry for a date provide a visual way for our users to select a date or range of dates

#### Search/Find/Lookup input

[provide and example of a search input here]

Search is a very useful tool to provide to users who want to find items quickly. I the nVision application search is useful in both the dashboard and the Model configurator views. The search should limit the items that a user has to sift through to either a small group or a single item.

Search should update results in real-time as much as possible in nVision.
Users should be able to type in a phrase and see the list they are searching through update when items match their input. 

[Show an example here of  search functionality in library list and dashboard]

#### Integer Inputs

[Provide more information here about integer inputs]

#### Decimal Inputs

Inputs that require decimal values should provide parsing for various forms of user input. By providing a system check on user input we can decrease the end users margin for error. 

> **Example** 
>
> If a user enters the value in a `123456` in a field that requires an input format of `xxxx.xxxx`

[provide decimal input example here]

#### Architectural Inputs

nVision is an application that largely deals with measurements in the empirical system. To provide a better enhancement to our user base nVision uses progressive enhancement to append the appropriate `'` or `"` marks to values entered in architectural input field.

> **Example**
If a user enters the values `5 8` in the architectural field the  the value will be displayed as `5' 8"` when the user leaves the field . 
  This should also occur when presses the <kbd>Enter</kbd> key on the keyboard while in focused the input field.

[provide architectural input example here]

#### Email Inputs

[Provide more information here about email inputs]

```
<label for="">Email
  <input type="email" name="primary_email" id="primary_email">
</label>
```

#### Telephone Inputs

When dealing with phone numbers in nVision we will utilize progressive enhancement to allow users to easily enter numbers and let the system parse the values as needed. We provide this enhancement by allowing the user to enter their 10 digit phone number with no hyphens.

> **ProTip**
Do not use 3 separate input fields for a telephone number entry. This adds undue complexity to the application and unnecessary burden on the end user.

Use the `type="tel"` input type provided by HTML5 
``` html
<input type="tel" name="phone_number" id="phone_number">
```

Use native browser HTML5 validations where available and customize them to match our site branding and style.

If a user enters a value `555 555 5555` or `5555555555` the system should  parse this string of numbers into its standardized format of `555-555-5555`.

__Handling Localization codes__

When dealing with international numbers the system should perform a lookup of the entered number to see which Country code matches the number entered. When the code is determined it should be append the country code to the number

If the user decides to add the country code themselves then the system will perform a check to see if that country code matches a known record.

[Provide example of phone number using progressive enhancement here]

#### Inline Edit

[provide an example of in-line edit input here]

In-line editing is a powerful tool that allows users to edit a record without switching between viewing and editing an input.  This method follows our principle of efficiency and should be used wherever possible.

Fields that allow in-line editing should be paired with the edit pencil icon in a tooltip on hover state. The inline edit action should start when the user clicks on the edit text or pencil icon in the tooltip.

[provide example of inline edit input here]

__Progressive enhancement__

Progressive enhancement is a tern in web design that describes an emphasis on accessibility, semantic markup (HTML) and the use of external style-sheets and scripting files.

Progressive enhancement is a focus on accessibility and efficiency for our user base while also containing a fall-back for older browsers where necessary.

Below are some of the cases where we try to offer progressive enhancements whenever possible.

## Data Presentation

When displaying data for a user the items should be easy to differentiate from each other. Often these items are made in the form of lists or multiple lists paired together. The most important thing is that the data  points are clearly labeled for scan-ability. For example data points that relate to units of measurement should have the measurement unit provided with the data point.

**Its a good idea to follow these principles when displaying data points:**

+ Provide a visible affordance such an icon, link or a button for interactive portions of list.
+ Title each list of data points and use labels where possible. Its a very jarring experience when data points are provided without context.
+ Provide users with an empty state screen when there are no data points to display. If a list is empty tell the user why this follows our principle of clarity. 

> Example 
> 
> A message in a search view would say "No results found, Please try and refine your search."

#### Data Tables

[provide example of tables here]

Data tables are used to display raw data elements. They are designed for desktop displays. A data table is the most basic form of data representation. 

This type of data presentation is to be used for large number of records that need to be easily scanned filtered and scrolled through.

If we allow columns of our tables to be resized allow for a horizontal scroll bar on the data table, but don't allow the columns to resize responsively as this actually impedes users ability to see on smaller screens and mobile devices.

When needing raw data on mobile devices its best to convert the data tables to Tiles lists. See [Tiles](#tiles) for more information.

#### Tree List

[provide example of Model Structure here]

A Tree List  is useful for displaying hierarchical data that needs to be grouped into a parent-child relationship. A Tree List will contain a `arrow icon` or `>` to indicate the ability to display the child of a list-item if there is one available. 

Child records are indented below their parent list-item to display their relationship in the hierarchy.

It is not a good idea to have trees nest deeper than 3 levels.

[Provide example tree list with good and bad example]

#### Tiles

[provide example of tile from pricing screens here]

A Tile is a UI component that acts as a gateway to more detailed information for a user. They can contain images, text, buttons, or links about a single action or subject.

They can contain content of various widths and length and should behave responsively to that content.

Tiles can grouped together along either the horizontal or vertical plane.

Tiles can be used when horizontal spacing is constrained. They are used a gateway to more content so there should be as little content as possible within them.

When using tiles for lists is best to use them for items that are shorter than 10 lines. If more information is needed use a List or data table instead depending on the context of the situation.

[Provide example of tiles listed together]

Because tiles can be varying widths and heights its best to group tiles by type.

Horizontal Tiles with horizontal tiles

Vertical tile with vertical tiles

If these two types need to be mixed together for the sake of context between data elements. Use the following layout...
[ Not decided yet what happens here]

#### Timeline/History Feed

[provide example of Versioning time-line here]

A Timeline or History Feed is a UI component that tracks what a user has done in the application. This component is primarily used in our "Versioning history" for Models in the Model Configurator.

The History feed shows past and present events that have happened to a model.

The history feed can be used to revert a model back to a previous state.

A user can access the past events of a model as well as the events that occurred beyond the current state they have chosen for a model.

[More details needed about the History feed/ Timeline UI]

## Data Loading and Processing

Loading indicators are helpful to user because they provide communication that the application is actively working to retrieve data for them. There are a variety of ways we present this data to our users in the nVision application.

#### Spinners

Spinners are animated SVGs or GIFs that provide feedback on an otherwise blank screen when the system is loading or working to retrieve data. Contrary to their name they don't always have to spin they can animate in lots of creative ways. Use spinners when a component on a page is making an update asynchronously without refreshing the entire page.

Spinners should generally be centered vertically _AND_ horizontally within its container. In order to provide contrast against any possible backdrop provide a light or dark overlay behind the spinner.

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

Blueprint loading should not be used for asynchronous updates in the application. Blueprints are a more visually appealing way to show that everything on a page needs to load. Showing our spinner animation in multiple components on a page or raw code variables would not be very a good experience to users and violates our principle of aesthetics.

Blueprints are to be used when data will take longer than roughly `300ms` to retrieve. If the data takes less than 300ms its best to just show the data. If it takes more `300ms` then the data should transition in smoothly and fade-in as the blueprint fades out.

If a component doesn't display until it already contains data then a blueprint is not needed just display the data.

__Blueprint Aesthetic__

[provide an example of Blueprint placeholder content here]

A blueprint design aesthetic should behave in the following manner

+ Lightweight and simple. use simple shapes to convey the content/data included in a component. This excludes actionable UI elements like buttons and links.
+ Keep the shape heights consistent to keep a nice and easy to view aesthetic
+ They should be responsive and stretch/shrink t fit their containers.
+ When loading blueprints they should follow the pattern of Top left to bottom right.

[provide an example of Blueprint placeholder for lists]

[provide an example of Blueprint placeholder for model/project here]

## Empty States

Empty states are a design pattern we employ when the UI can't show content.
When a dialog doesn't contain any items or a search doesn't retrieve any results. These state should not be very common but in the event that they occur its better to provide users with a designed experience instead of a blank screen (which is often seen as an afterthought). 

__Empty state layout__

Empty state should display a non-interactive image coupled with a text tagline.

__Search empty State__

When a user searches in nVision and their results are not found we should display helper text to help them troubleshoot their query:

> Example:
  No Results found. Please refine your search
  Here are some tips:
  Check your spelling
  Use first 3 characters of text to search

__Image &amp; Background__
The image should be neutral in tone. The background should also be neutral in tone compared to the normal state of the container.

[Provide example of empty state in Sidebar dialogs]

__Text Usage__

The text should be very brief and follow the principles of [Voice and Tone](#voice-and-tone)

__Action Options__

Some Empty states should contain a way for users to add content to the component. 

[Provide example of Empty state with action text/button here]

## Layouts

Layouts are structured templates that provide consistency for common actions/patterns in the application.

**Layouts guidelines to follow when creating/selecting layouts:** 

+ **Content drives layout** - Understand how the information will be used before choosing a layout design.
+ **Priorities First** - Organize the content to display the most important information first 
+ **Group like items together** - Make it efficient for users to sift through the content.

#### Dashboard Layout

[provide example of dashboard layout here]

#### Workspace Layout

[provide example of workspace layout here]

#### List Layout

[provide example of List layouts here]

#### Grid Layout

[provide example of grid layouts here]

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

In the dashboard the Alerts should appear at the top of screen.

__ Alert Types__

**Alerts can appear in 3 unique states:**

+ **Persistent** - these alerts remain visible until the user dismisses it with the ` [X] `, or close icon. Time duration doesn't apply to these alert types.
+ **Dismiss-able** - these remain visible until the user has either dismissed it with the `[X]` or the time duration has been completed.
+ **Wispy** - This will remain visible until the time duration has been completed.  there is no `[X]` icon on this alert type and the user cannot dismiss it early. This is done to force the user to see this alert for the full time period.

__Sizing__

Alerts should have a minimum width of 60% of their container (see alerts in components section for more details). Alert text should wrap to as many lines as necessary without truncation. Alerts should also be centered within their container or within the canvas of the workspace.

__Alert Stacking__

When more than one alert appears at the same time stack them so that the most recent alert is placed on top and the rest appear in chronological order.

__Alert Batching__ 

Alert stacking can become quite busy. To minimize the amount of alerts that appear stacked nVision utilizes a Batching of alerts of the same type.

[Provide example of batched alerts of the same type here]

> **ProTip:** 
Success message Alerts should not be used when an action would bring the user into a newly created item or when the action would present the user with their new change immediately.

#### Confirmation Dialogs

[provide an example of a confirmation dialog here]

A confirmation dialog is a notification that requires user action in order to move forward.

> **ProTip:** Confirmation dialogs are meant to stop the user from completing other parallel actions in the application. This way we force the user to take action on this before doing anything else.

Confirmation dialogs provide the user with one or more options to confirm or deny their choices for the action that prompted the dialog. 

**Confirmation dialogs should be used when one of the following things occur:**

+ When changes are not saved in real-time
+ When there is no ability to retain changes when switching between actions
+ When performing batch operations that would require a reset of items in the workspace. This is particularly common in the Model Configurator

**Confirmation dialogs require one of three actions to take place:**

+ A user must click the `cancel` button in the dialog. This action will cancel any changes that were tied to the confirmation dialog. 
+ A user must click the `Continue` button in the dialog. This action will confirm any changes that were tied to the confirmation dialog.
+ A user must click the `X` icon to close the dialog. This action has the same effect as the cancel option.

[Provide examples of confirmation dialogs in Model Configurator]

#### Tooltips

Tooltips are text labels that provide feedback when the user hovers over, focuses on, or touches an element in the application.

They should contain brief help-text about the function of the element its paired with.

Tooltips should be used for interactive icons and buttons with iconography and imagery in the application

[Provide an example of tooltip with icons]

[Provide an example of tooltip with button]

[Provide an example of tooltip with imagery]

Tooltips don't have directional arrows they are presented based on motion towards the source object

[example of tooltip appearing in relation to mouse direction] 

## Navigation

Navigation patterns are what help users move between screens and find what they need in the application to accomplish their goals.

There are several techniques that nVision uses to guide users through the application:

#### Tabs

__Dialog tabs__

[Provide example of pattern in sidebar dialog from workspace]

__Modal tabs__

[Provide example of pattern in modal dialog from workspace]

#### Nested tabs

[Provide example of this in Modal dialog from workspace]

#### Cross-section tabs

[Provide example of this in Modal dialog from workspace]

#### Trees List

[Provide example of this pattern in workspace]

#### Breadcrumbs

[Provide example of this pattern in dashboard and workspace]

#### Filter bar

[Provide example of this pattern in dashboard]

#### Off-Canvas Navigation

[Provide example of this pattern in dashboard]

# nVision UI Components

## Buttons

## Data Loading/Processing Indicators

## Data Tables

## Dialogs

#### Modals

#### Confirmations

#### Sidebars

## Forms

#### Text Fields

#### Checkboxes

#### Radio button

#### Textarea

#### Datepicker

## Lists

#### Grid Lists

#### Library List

#### Tree List

## Menus

#### Right click Menus

## Navigation

#### Off-Canvas

#### Horizontal Navigation

#### Vertical Navigation

## Notifications

#### Alerts

## Panels

## Tiles

## Tooltips
