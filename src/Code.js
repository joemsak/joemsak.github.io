import React, { useState } from 'react';
import Gist from 'react-gist';

import './App.scss';

import convenience1 from './img/convenience-1.png';
import convenience2 from './img/convenience-2.png';

import relationshipScopes from './img/relationship-scopes.png';

import naming1 from './img/naming-1.png';
import naming2 from './img/naming-2.png';
import naming3 from './img/naming-3.png';
import naming4 from './img/naming-4.png';

import settings0 from './img/settings-0.png';
import settings1 from './img/settings-1.png';
import settings2 from './img/settings-2.png';
import settings3 from './img/settings-3.png';
import settings4 from './img/settings-4.png';

import profileControllerConcern from './img/profile-controller-concern.png';
import profileControllerStudent from './img/profile-controller-student.png';
import profileControllerMentor from './img/profile-controller-mentor.png';

function Code() {
  const [showPanel, setShowPanel] = useState('current');

  const setActivePanel = (evt) => {
    setShowPanel(evt.target.dataset.panel)
  }

  const currentPanelCss = () => {
    return showPanel === 'current' ? 'show' : ''
  }

  const previousPanelCss = () => {
    return showPanel === 'previous' ? 'show' : ''
  }

  const currentLinkCss = () => {
    return showPanel === 'current' ? 'active' : ''
  }

  const previousLinkCss = () => {
    return showPanel === 'previous' ? 'active' : ''
  }

  const gistId = () => {
    return showPanel === 'previous' ? '871cd16d04200ab6c16cfa95a52954e0' : ''
  }

  return (
    <main className="full">
      <h1>Hey there, Basecamp!</h1>

      <h2>
        I made this page for you to take a brief tour of&nbsp;
        <a
          href="//github.com/joemsak"
          target="_blank"
          rel="noopener noreferrer"
        >
          my code
        </a>
      </h2>

      <p><a href="/">&larr; Back to main page</a></p>

      <nav>
        <h2
          className={currentLinkCss()}
          onClick={setActivePanel}
          data-panel='current'
        >
          Current work example
        </h2>

        <h2
          className={previousLinkCss()}
          onClick={setActivePanel}
          data-panel='previous'
        >
          Previous work example
        </h2>
      </nav>

      <div className={`panel ${currentPanelCss()}`}>
        <p>
          First up, here is some code re-writing that I'm presently branched on
          while trying to pass failing specs on our CI. Samples shown are from a 6-year
          old, <em>very legacy</em>, Rails 4.2 app that powers both <a
            href="//kadenze.com"
            target="_blank"
            rel="noopener noreferrer"
          >Kadenze</a> and&nbsp;
          <a
            href="//kannu.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kannu
          </a>
          &nbsp;(and
          Kannu has multi-tenancy). The original developers have been gone
          since before my time, and I've been working effectively on my own since
          January 2019.
        </p>

        <h3>Packing known globals and terse details into convenience methods</h3>

        <img
          src={ convenience1 }
          alt="Code sample of convenience method rearrangments"
        />

        <img
          src={ convenience2 }
          alt="Code sample of convenience method rearrangments"
        />

        <p>
          Since `Institution.current` is a known global, I can call an existing method
          that avoids requiring it as an argument in the wild. Similarly, there is
          already a scope for the inner-workings of `Institution.from_courses`. I
          can also just now see that there's a duplicated bit in these two
          screenshots to cleanup in my next round of work!
        </p>

        <h3>Clear up duplication inside some association extensions</h3>

        <img
          src={ relationshipScopes }
          alt="Code sample of duplication cleanup"
        />

        <h3>Improving readability and reminders of legacy hard-coded logic with naming</h3>

        <img
          src={ naming1 }
          alt="Code sample of code naming choices"
        />

        <p>
          The policy files are rife with duplication and it's going to be quite a
          patient slow burn to get to the point where all policies have been consolidated
          and tidied up nicely, so I just try to clean them up as I run into them.
        </p>

        <img
          src={ naming2 }
          alt="Code sample of code naming choices"
        />

        <img
          src={ naming3 }
          alt="Code sample of code naming choices"
        />

        <img
          src={ naming4 }
          alt="Code sample of code naming choices"
        />

        <p>
          The relevant bits above are the legacy hardcoded special cases for
          Stanford/Princeton. It took the co-founder a minute to realize what the original code was for, so I baked it into the new naming. We will see the old "in the wild" calls among the next group of changes.
        </p>

        <h3>Replacing a complicated concern with plain code in new convenience methods</h3>

        <img
          src={ settings0 }
          alt="Code sample of replacing complex code with simpler code"
        />

        <p>
          Unfortunately, despite good intentions, this concern was hard to follow.
          To boot, the code required for use in the wild was not convenient.
        </p>

        <img
          src={ settings1 }
          alt="Code sample of replacing complex code with simpler code"
        />

        <img
          src={ settings2 }
          alt="Code sample of replacing complex code with simpler code"
        />

        <img
          src={ settings3 }
          alt="Code sample of replacing complex code with simpler code"
        />

        <p>
          It looks like `#allows_archive?` can now be re-written even simpler
          during my next round of work!
        </p>

        <img
          src={ settings4 }
          alt="Code sample of replacing complex code with simpler code"
        />

        <p>
          Seen above, it should be a lot easier for devs to follow and continue
          to improve the settings code for this model. Fewer details are leaking
          out of the model now, hopefully relieving developers of cognitive load.
        </p>
      </div>

      <div className={`panel ${previousPanelCss()}`}>
        <p>
          In another quick sample, I'd like to demonstrate code from my last greenfield
          project that still has my name on most of the lines of code two years later.
          At a glance of various changes since I left, I can see that other devs
          were able to follow my intentions pretty well, which feels good.
        </p>

        <p>
          These screenshots are from&nbsp;
          <a
            href="//github.com/Iridescent-CM/technovation-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            the open source code
          </a>
          &nbsp;of&nbsp;
          <a
            href="//my.technovationchallenge.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Technovation
          </a>,
          a team building &amp; competition platform for girls of underserved
          communities all around the world to participate and learn application
          development and entrepreneurship.
        </p>

        <p>
          I am still proud of this code because I architected the routes, controllers,
          and views such that each user-audience (mentors, students, ambassadors,
          judges, and admins) are guaranteed to the developer that the correct role
          has been authenticated. The code never needs to mix concerns or add switch
          cases for the differing roles.
        </p>

        <p>
          As a big believer in conventions, I set it up so that if an audience role
          is in your file's subdirectory hierarchy (such as
          `app/views/judges/resource/show.html.erb`) you are guaranteed the
          current_user is of that role, and that role's code features will work.
          Most duplicate templates and logic are shared via DRY, OOP extension.
        </p>

        <p>
          The one example I am sharing here is of the student &amp; mentor profile
          controllers with their shared concern. You'll note they have their own
          parent controllers, which you can trust that each has their own filters
          to guarantee the correct role authentication to the developers.
        </p>

        <img
          src={ profileControllerStudent }
          alt="Sample of an automagically-scoped dynamic profile controller"
        />

        <img
          src={ profileControllerMentor }
          alt="Sample of an automagically-scoped dynamic profile controller"
        />

        <p>
          Looking back at this again today, I can see that maybe some defaults
          could be further baked in so that some of these methods are
          created automagically based on naming conventions. At least for now,
          it's easy to read how the concern is overwritten between the different
          roles.
        </p>

        <h3>Profile controller concern quick rewrite</h3>

        <img
          src={ profileControllerConcern }
          alt="Sample of an automagically-scoped shared profile controller concern"
        />

        <p>
          Finally, on the one hand, I love that the other developers were able
          to follow the existing code and have added new behavior in the concern
          where it belongs. However, I see that it's probably time to prepare this
          class for future refactoring, so I did a quick and dirty gist of how I
          might begin those changes below.
        </p>

        <Gist id={gistId()} />

        <p>
          Of course, given that this is a first draft, I'd discuss where it's
          going with my teammates before taking it too far. I'd like to think
          this would get some good ideas flowing.
        </p>

        <p>
          I hope this page has served to give you a decent idea of my approach as
          a coder. I would be delighted for a chance to elaborate on anything
          of relevance to your team.
        </p>

        <p>Thank you again for your time! &mdash;Joe Sak</p>

        <p><a href="/">&larr; Back to main page</a></p>
      </div>
    </main>
  )
}

export default Code;
