import React from 'react';
import Gist from 'react-gist';

import './App.scss';

import convenience1 from './img/convenience-1.png';
import convenience2 from './img/convenience-2.png';

import relationshipScopes from './img/relationship-scopes.png';

import naming1 from './img/naming-1.png';
import naming2 from './img/naming-2.png';
import naming3 from './img/naming-3.png';

import settings0 from './img/settings-0.png';
import settings1 from './img/settings-1.png';
import settings2 from './img/settings-2.png';
import settings3 from './img/settings-3.png';
import settings4 from './img/settings-4.png';
import settings5 from './img/settings-5.png';

import profileControllerConcern from './img/profile-controller-concern.png';
import profileControllerStudent from './img/profile-controller-student.png';
import profileControllerMentor from './img/profile-controller-mentor.png';

function Code() {
  return (
    <main className="full">
      <h1>Hey Basecamp!</h1>
      <h2>
        I made this page for you to take a brief tour of
        &nbsp;<a href="//github.com/joemsak" target="_blank">my code</a>&nbsp;
        samples
      </h2>

      <h2>Current work example</h2>

      <p>
        First up, here is some code re-writing that I'm presently branched on
        while trying to pass failing specs on our CI. Samples shown are from a 6-year
        old, <em>very legacy</em>, Rails 4.2 app that powers both <a
          href="//kadenze.com"
          target="_blank"
        >Kadenze</a> and <a href="//kannu.com" target="_blank">Kannu</a> (and
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
        Since `Institution.current` is a known global, I call an existing method
        that avoids needing it as an argument in the wild. Similarly, there is
        already a scope for the inner-workings of `Institution.from_courses`. I
        also see that there's a duplicated bit in these two screenshots to cleanup
        in my next round of work!
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
        and tidied up nicely. 
      </p>

      <img
        src={ naming2 }
        alt="Code sample of code naming choices"
      />

      <img
        src={ naming3 }
        alt="Code sample of code naming choices"
      />

      <p>
        The relevant bits above are the legacy hardcoded special cases for
        Stanford/Princeton that we will visit again in the next group.
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
        Mixed in here we see delegation added to an association, both with and
        without using a prefix (screenshot cuts off the `prefix: false` line)
      </p>

      <img
        src={ settings4 }
        alt="Code sample of replacing complex code with simpler code"
      />

      <p>
        It looks like `#allows_archive?` can now be re-written even simpler
        during my next round of work!
      </p>

      <img
        src={ settings5 }
        alt="Code sample of replacing complex code with simpler code"
      />

      <p>
        Seen above, it should be a lot easier for devs to follow and continue
        to improve the settings code for this model. Fewer details are leaking
        out of the model now, hopefully relieving developers of cognitive load.
      </p>

      <h2>Previous work example</h2>

      <p>
        In another quick sample, I'd like to demonstrate code from my last greenfield
        project that still has my name on most of the lines of code two years later.
        Among a perusal of various changes, I see that other devs were able to follow my
        intentions pretty well, which feels good.
      </p>

      <p>
        These screenshots are from&nbsp;
        <a href="//github.com/Iridescent-CM/technovation-app" target="_blank">
          the open source code
        </a>
        &nbsp;of <a href="//my.technovationchallenge.org" target="_blank">Technovation</a>,
        a team building &amp; competition platform for girls of underserved
        communities all around the world to participate and learn application
        development and entrepreneurship.
      </p>

      <p>
        I am still proud of this code because I architected the routes, controllers,
        and views such that each user-audience (mentors, students, ambassadors,
        judges, and admins) are guaranteed to the developer that the correct role
        has been authenticated. The code never needs to mix concerns and switch
        cases for the differing roles. If an audience name is in your file's
        subdirectory hierarchy (such as  `app/views/judges/resource/show.html.erb`)
        you are guaranteed the current_user is of that role, and that role's code
        features will work. Most duplicate templates and logic are shared via
        DRY OOP extension.
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

      <img
        src={ profileControllerConcern }
        alt="Sample of an automagically-scoped shared profile controller concern"
      />

      <p>
        Finally, on one hand I love that the other developers were able to follow the
        example and have added new behavior where it belongs. However, I see that it's
        probably time for this concern to be ready for future refactoring, so I
        did a quick and dirty gist of how I might begin those changes below.
      </p>

      <h3>Profile controller concern quick rewrite</h3>

      <Gist id="871cd16d04200ab6c16cfa95a52954e0" />

      <p>
        Of course, given that this is a first attempt at rewriting, I'd want to
        discuss where it's going with my teammates before taking it too far. I'd
        like to think this would get ideas flowing.
      </p>

      <p>
        I hope this page has served to give you a decent idea of my approach as
        a coder. I would be delighted for a chance to elaborate on anything
        of relevance to your team.
      </p>

      <p>Thank you again for your time! &mdash;Joe Sak</p>
    </main>
  )
}

export default Code;
